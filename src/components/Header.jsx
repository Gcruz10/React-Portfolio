const Header = (props) => {
    return (
        <header style={{backgroundColor: props.bgColor}}>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header