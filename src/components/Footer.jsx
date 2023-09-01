const Footer = (props) => {
    return (
        <footer style={{backgroundColor: props.bgColor}}>
            <h1>{props.contacts}</h1>
        </footer>
    )
}

export default Footer