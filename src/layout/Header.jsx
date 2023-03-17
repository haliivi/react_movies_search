function Header () {
    return (
        <nav className="green lighten-2">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/haliivi/react_movies_search">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}