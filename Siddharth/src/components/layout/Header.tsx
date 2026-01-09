import { Facebook, Twitter, Instagram, Headset } from 'lucide-react'

export function Header() {
    return (
        <header className="bg-white py-3 px-3 px-md-5 sticky-top shadow-sm border-bottom border-light">
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-warning d-flex align-items-center justify-content-center rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                        <span className="text-white fw-800 fs-4">S</span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="fs-4 fw-800 text-dark lh-1" style={{ letterSpacing: '-1.5px', fontFamily: "'Poppins', sans-serif" }}>
                            SIDDHARTHA<span className="text-warning">BANK</span>
                        </span>
                        <span className="text-muted fw-bold" style={{ fontSize: '9px', letterSpacing: '3px' }}>NEPAL'S DIGITAL GATEWAY</span>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center align-items-md-end gap-2">
                    <div className="d-flex align-items-center gap-2 px-3 py-1 bg-light rounded-pill border border-light">
                        <Headset size={14} className="text-warning" />
                        <span className="fw-bold text-dark" style={{ fontSize: '11px' }}>Siddhartha Care: <span className="text-secondary">+977 01-5970020</span></span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <span className="small text-muted fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>Connect with us</span>
                        <div className="d-flex gap-2">
                            {[
                                { icon: Facebook, color: '#1877F2' },
                                { icon: Twitter, color: '#1DA1F2' },
                                { icon: Instagram, color: '#E4405F' }
                            ].map((social, i) => (
                                <a key={i} href="#" className="p-1 rounded-circle bg-white shadow-sm border border-light transition-all hover-scale d-flex" style={{ width: '28px', height: '28px' }}>
                                    <social.icon size={14} className="m-auto" style={{ color: social.color }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .hover-scale:hover { transform: scale(1.1); }
                .fw-800 { font-weight: 800; }
            `}</style>
        </header>
    )
}


