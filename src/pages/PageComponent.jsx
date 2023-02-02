const PageComponent = ({ children, className }) => (
    <>
        {/* Header */}
        <header className='px-4'>
            <nav className="navbar text-center justify-content-center navbar-light bg-light">
                <a className="navbar-brand" href="https://imprentadelacultura.wordpress.com/">
                    <img src="https://imprentadelacultura.files.wordpress.com/2015/04/logo-imprenta.png" width="80" height="40" className="d-inline-block align-top" alt="impresion de la cultura" />
                    Fundacion Imprenta de la Cultura
                </a>
            </nav>
        </header>

        {/* Contenido Principal */}
        <main className={`min-h-screen p-4 ${className}`}>
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-dark">
            <div className="container d-flex justify-content-between text-white text-center">
                <div className="copyright">
                    <p >Imprenta Nacional de la cultura </p>
                </div>
                <div>
                    <ul className="d-flex gap-3 list-unstyled">
                        <li><a href="https://www.instagram.com/ImprentaCultura/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="https://twitter.com/ImprentaCultura/" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/Laimprentadelacultura/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="https://imprentadelacultura.wordpress.com/" target="_blank" rel="noreferrer"><i className="bi bi-wordpress"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
)

export default PageComponent
