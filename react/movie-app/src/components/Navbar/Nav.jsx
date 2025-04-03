export default function Nav({children}){
    return (
        <nav className="bg-primary text-white p-2">
        <div className="container">
        <div className="row align-content-center">
            {children}
        </div>
        </div>
    </nav>
    )
}