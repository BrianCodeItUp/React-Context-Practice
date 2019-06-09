## Using React Context Api to replace Redux
Review: The hardest part of replace Redux with Context api
  - Very easy to mix view logic with business logic because, my solution is create another component contain all the data like redux's store and also provide method as call back.
  Let other component use methods provided by the context store component to change the data inside of the store 