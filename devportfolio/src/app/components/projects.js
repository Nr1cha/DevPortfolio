"use client";


function ListItem(props) {
  return <li>{props.projectItem}</li>
}

// list out projects or assignments here
export default function Projects() {

  const projects = ['project1', 'project2', 'project3']

  let elements = []

  for(let i = 0; i < projects.length; i++) {
    const projectItem = projects[i]
    
    elements.push(
      <ListItem key={i} projectItem={projectItem} />
    )
  }

  return (

    <div>
      <p>this is a test</p>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia justo dis vestibulum vitae sagittis himenaeos turpis. Rhoncus per finibus in neque quis; nullam erat accumsan. Auctor consectetur fusce purus maecenas fringilla.</p>

      <ul>
        {elements}
      </ul>
    </div>
  );
}
