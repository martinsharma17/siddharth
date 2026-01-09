import { Check } from "lucide-react"

interface TrustBadgeProps {
    label: string
}

export function TrustBadge({ label }: TrustBadgeProps) {
    return (
        <div className="d-flex align-items-center gap-2 small fw-bold text-uppercase text-secondary" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                <Check size={12} className="text-success" />
            </div>
            {label}
        </div>

    )
}
