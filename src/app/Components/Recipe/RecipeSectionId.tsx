import { motion } from "framer-motion";
import { fadeUp } from "@/app/utils/animationVariants";
const RecipeSectionId = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="show">
      <div className="border rounded-3xl p-6 shadow-sm space-y-6">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {children}
      </div>
    </motion.div>
  );
};

export default RecipeSectionId;
