import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log("click");
    }

  return (
    <div>
        <h1>{title}</h1>
        <Button color='black' text='Skapa artikel' onClick={onClick}/>
    </div>
  )
}

export default Header