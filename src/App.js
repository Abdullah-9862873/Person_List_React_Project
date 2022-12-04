import './App.css';

const App = () => {
  return (
  <PersonList />
  )
}

const PersonList = () => {
  const people = [
    {
      img:22, name:'John',job:'developer',description:'Description for person 1'
    },
    {
      img:34, name:'Bob',job:'designer',description:'Description for person 2'
    },
    {
      img:56, name:'Peter',job:'artist',description:'Description for person 3'
    },
    {
      img:60, name:'Tom', job:'tester',description:'Description for person 4'
    }
  ]
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quasi cum illum ipsam!
      </Person>
      <Person person={people[2]}/>
      <Person person={people[3]}/>
    </section>
  )
}

const Person = (props) => {
  // Destructuring
  const {img, name, job, description} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="Image" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h4>{description}</h4>
        <h4>{children}</h4>
      </div>
    </div>
  )
}

export default App;
