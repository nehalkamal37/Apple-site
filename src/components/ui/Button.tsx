import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "text";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500";

  const variantClasses = {
    primary:
      "bg-primary-700 text-white hover:bg-primary-800 focus-visible:ring-primary-600",
    secondary:
      "bg-white text-primary-800 border border-primary-300 hover:bg-gray-50 focus-visible:ring-primary-600",
    accent:
      "bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500",
    text:
      "bg-transparent text-primary-700 hover:text-primary-900 hover:bg-primary-50 focus-visible:ring-primary-600",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm min-w-[44px] min-h-[44px]",
    md: "px-4 py-2 text-base min-w-[44px] min-h-[44px]",
    lg: "px-6 py-3 text-lg min-w-[44px] min-h-[44px]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
