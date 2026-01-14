import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Zod validation schema
const communitySignupSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select your role"),
  optionalQuestion: z.string().optional(),
});

export default function CommunitySignupForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(communitySignupSchema),
    defaultValues: {
      firstName: "",
      email: "",
      role: "",
      optionalQuestion: "",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Replace with actual API endpoint
      const response = await fetch("/api/community-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Welcome to the waitlist!",
          description:
            "Check your email for confirmation. We'll be in touch soon.",
          variant: "default",
        });
        reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name */}
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm font-medium">
          First name
        </Label>
        <Input
          id="firstName"
          type="text"
          placeholder="John"
          {...register("firstName")}
          aria-required="true"
          aria-invalid={errors.firstName ? "true" : "false"}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          className="h-11 focus-visible:ring-[#006F64]"
        />
        {errors.firstName && (
          <p
            id="firstName-error"
            className="text-sm text-red-600"
            role="alert"
          >
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11 focus-visible:ring-[#006F64]"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label htmlFor="role" className="text-sm font-medium">
          Role
        </Label>
        <Select
          value={selectedRole}
          onValueChange={(value) => setValue("role", value)}
        >
          <SelectTrigger
            id="role"
            className="h-11 focus:ring-[#006F64]"
            aria-required="true"
            aria-invalid={errors.role ? "true" : "false"}
            aria-describedby={errors.role ? "role-error" : undefined}
          >
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="software-engineer">
              Software Engineer (Frontend, Backend, Fullstack, Mobile)
            </SelectItem>
            <SelectItem value="software-architect">
              Software Architect
            </SelectItem>
            <SelectItem value="data-professional">
              Data Professional (Engineer, Analyst, Scientist)
            </SelectItem>
            <SelectItem value="ux-ui-designer">UI/UX Designer</SelectItem>
            <SelectItem value="product-designer">Product Designer</SelectItem>
            <SelectItem value="product-manager">Product Manager</SelectItem>
            <SelectItem value="technical-project-manager">
              Technical Project Manager
            </SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && (
          <p id="role-error" className="text-sm text-red-600" role="alert">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Optional Question */}
      <div className="space-y-2">
        <Label htmlFor="optionalQuestion" className="text-sm font-medium">
          What is your main challenge when pursuing opportunities with U.S.
          companies? (Optional)
        </Label>
        <Textarea
          id="optionalQuestion"
          placeholder="Share your thoughts..."
          {...register("optionalQuestion")}
          className="min-h-[120px] focus-visible:ring-[#006F64]"
          aria-describedby={
            errors.optionalQuestion ? "optionalQuestion-error" : undefined
          }
        />
        {errors.optionalQuestion && (
          <p
            id="optionalQuestion-error"
            className="text-sm text-red-600"
            role="alert"
          >
            {errors.optionalQuestion.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining waitlist...
          </>
        ) : (
          "Join the waitlist"
        )}
      </Button>
    </form>
  );
}
