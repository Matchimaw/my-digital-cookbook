const REcipeForm = () => {

  const [recipe, setRecipe] = useState({
    name: ""
    image_url: "",
    steps: [

    ]
  })

  const [newInstruction, setNewInstruction] = useState("")

  const newInstructionCallback = (event) => {
    setNewInstruction(event.currentTarget.value)
  }

  const addInstruction = (event) => {
    event.preventDefault()
    setRecipe({
      ...recipe,
      steps: recipe.steps.concat(newInstruction)
    })
  }

  return(
    <form>

        <input>NAme</input>

        <label>
          New Instruction
          <input type="text" name="instruction_name"/>
        </label>
        
        
        <button onClick={addInstruction}>Add New Instruction</button>

    </form>
  )
}