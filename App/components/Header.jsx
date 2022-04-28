import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log("click");
    }

  return (
    <div>
        <h1>{title}</h1>
        <Button color='white' text='Lägg till artikel' onClick={onClick}/>
    </div>
  )
}

export default Header