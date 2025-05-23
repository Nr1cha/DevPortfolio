"use client";
// format of how they are to be ordered
function ListItem(props) {
  return (
    <li className="mb-4">
      <div className="font-bold">{props.projectItem.name}</div>
      <div>{props.projectItem.description}</div>
      <div>
        <a href={props.projectItem.link}
          className="text-blue-600 hover:underline"
          target='_blank'
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <br></br>
    </li>
  );
}

// array of objects for school projects
export default function Projects() {
  const projects = [
    { id: 1, name: 'CSE 111', description: 'The first project covering javascript.', link: 'https://github.com/Nr1cha/school/tree/main', date: '13-Jul-22' },
    { id: 2, name: 'WDD 130', description: 'First project covering a simple static dummy site for a white water rafting page', link: 'https://github.com/Nr1cha/WDD130', date: '24-Jun-22' },
    { id: 3, name: 'WDD 230', description: 'Page showing a dummy travel / store site', link: 'https://github.com/Nr1cha/wdd230', date: '14-Dec-22' },
    { id: 4, name: 'CSE 210', description: 'A project going over C# as my first OOP based language and creating a really simple D&D app.', link: 'https://github.com/Nr1cha/cse210-nickrichards', date: '3-Apr-23' },
    { id: 5, name: 'WDD 330', description: 'A browser based weather application getting API data externally for live weather data.', link: 'https://github.com/Nr1cha/WDD330_final', date: '5-Apr-23' },
    { id: 6, name: 'CSE 340', description: 'This Project was my first introduction to the MVC model. We established our own routes and created our own documentation using swagger aside from MVC', link: 'https://github.com/Nr1cha/CSE340-newRepo', date: '2-Dec-23' },
    { id: 7, name: 'CSE 341', description: 'This was a project for running different web services hosted on render.com', link: 'https://github.com/Nr1cha/CSE341WebServices', date: '3-Feb-24' },
  ];

  const elements = projects.map(project => (
    <ListItem key={project.id} projectItem={project} />
  ));


  return (
    <div className="projects">
      <p>My foray into software engineering began at Brigham Young University-Idaho. From responsive web applications to database systems, my passion for full stack solutions continues to grow. I love transforming ideas into full fledged solutions, enhancing the consumer's experience.</p> <br></br>
      <p>My technical stack includes core web technologies. I believe a deep understanding of HTML, CSS, and JS are necessary, even when libraries are applied. Express and React are my go to libraries to enhance development productivity.</p> <br></br>
      <p>As a recent graduate from Brigham Young University-Idaho with a bachelor’s degree in Applied Technology, I specialize in web development and database programming. Through my studies, I gained a deep appreciation for teamwork in building websites and programming both relational and non-relational databases.</p> <br></br>
      <ul className="projectItem">{elements}</ul>
    </div>
  );
}
