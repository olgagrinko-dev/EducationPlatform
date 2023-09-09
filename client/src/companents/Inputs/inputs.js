function Inputs({ array, input, setInp }) {
    const res = array.map((elem, index) => <div key={index}><input type="text" name={elem} onChange = {changeInp} placeholder={elem} /></div>);

   function changeInp(event) {
    setInp({...input, [event.target.name]:event.target.value})
   }

    return (
        <>
            {res}
        </>
    )
}

export default Inputs;