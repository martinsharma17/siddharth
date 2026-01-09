import { motion } from "framer-motion"

interface FormStepLayoutProps {
    title: string
    description?: string
    children: React.ReactNode
}

export function FormStepLayout({ title, description, children }: FormStepLayoutProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
        >
            <div className="space-y-1">
                <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">{title}</h2>
                {description && <p className="text-gray-500 text-[13px] font-medium">{description}</p>}
            </div>
            <div className="grid gap-5 py-2">
                {children}
            </div>
        </motion.div>
    )
}
