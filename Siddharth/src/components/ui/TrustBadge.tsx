import { Check } from "lucide-react"

interface TrustBadgeProps {
    label: string
}

export function TrustBadge({ label }: TrustBadgeProps) {
    return (
        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
            </div>
            {label}
        </div>
    )
}
