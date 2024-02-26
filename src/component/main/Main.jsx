/* eslint-disable react/prop-types */
export default function Main({children}) {
  return (
    <main>
        {children.map(child => {
            if(child.type.name === 'ScoreBoard') {
                return (
                    <div key={child.type.name} className="flex">
                        {child}
                    </div>
                )
            }    

            if(child.type.name === 'RenderCards') {
                return (
                    <div key={child.type.name} className="grid template-columns">
                        {child}
                    </div>
                );
            }


        })}
    </main>
  )
}