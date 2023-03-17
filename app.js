function Test()
{
    let myobject = {name: "Madras"}
    let newobject = myobject
    myobject.name = "Chennai"
    let vowelArray = ["a","e","i","o"]
    let newArray = vowelArray
    vowelArray.push("u")
    const ECE=()=>{alert("Check the console output!")}
    console.log(myobject)
    console.log(vowelArray)
    return <div><button onClick={ECE}> Reference Data Types and call the function </button></div>
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"))