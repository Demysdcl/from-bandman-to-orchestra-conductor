import { TodoList } from './modules/memoization'

let counter = 0

function App() {
  console.log('App counter', ++counter)
  return (
    <>
      <div className="p-20">
        <TodoList />
        {/* <OneManBand /> */}
        {/* <OrchestraConductorV1 /> */}
        {/* <OrchestraConductorV2 /> */}
        {/* <OrchestraConductorV3 /> */}
        {/* <OrchestraConductorV4 /> */}
        {/* <OrchestraConductorV5 /> */}
      </div>
      {/* <Loader /> */}
    </>
  )
}

export default App
