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
            className="d-flex flex-column gap-4"
        >
            <div className="mb-2">
                <h2 className="fs-4 fw-bold text-dark text-uppercase mb-1" style={{ letterSpacing: '-0.02em' }}>{title}</h2>
                {description && <p className="text-secondary small fw-medium mb-0">{description}</p>}
            </div>
            <div className="d-flex flex-column gap-3 py-2">
                {children}
            </div>
        </motion.div>

    )
}
