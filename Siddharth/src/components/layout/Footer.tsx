export function Footer() {
    return (
        <footer className="py-5 mt-auto" style={{ backgroundColor: '#0f172a', borderTop: '4px solid #f2ae1b' }}>
            <div className="container px-3 px-md-5">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
                    <div className="d-flex align-items-center gap-3">
                        <div className="bg-warning d-flex align-items-center justify-content-center rounded-circle shadow-sm" style={{ width: '40px', height: '40px' }}>
                            <span className="text-white fw-800 fs-5">S</span>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="text-white fw-800 h5 mb-0" style={{ letterSpacing: '-1.5px', fontFamily: "'Poppins', sans-serif" }}>
                                SIDDHARTHA<span className="text-warning">BANK</span>
                            </span>
                        </div>
                    </div>

                    <div className="text-center text-md-end">
                        <p className="text-light opacity-50 mb-2" style={{ fontSize: '11px', letterSpacing: '1px', fontWeight: 600 }}>
                            &copy; {new Date().getFullYear()} SIDDHARTHA BANK LIMITED. ALL RIGHTS RESERVED.
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3" style={{ fontSize: '10px' }}>
                            <a href="#" className="text-warning text-decoration-none opacity-75 hover-opacity-100 fw-bold transition-all">PRIVACY POLICY</a>
                            <span className="text-white opacity-25">|</span>
                            <a href="#" className="text-warning text-decoration-none opacity-75 hover-opacity-100 fw-bold transition-all">TERMS OF SERVICE</a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .hover-opacity-100:hover { opacity: 1 !important; }
                .fw-800 { font-weight: 800; }
                .transition-all { transition: all 0.3s ease; }
            `}</style>
        </footer>
    )
}


