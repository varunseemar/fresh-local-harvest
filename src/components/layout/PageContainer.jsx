
import { cn } from "@/lib/utils";

const PageContainer = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4 py-6", className)}>
      {children}
    </div>
  );
};

export default PageContainer;
