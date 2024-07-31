// Вопрос что будет в консоли ?

const Children = (props) => {
  setInterval(() => {
    props.name = 'newName';
    props.age += 10;
    props.settings.meta = '*1000';
  }, 100);

  console.log('render Child =====');

  return (
    <div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.setting.meta}</div>
    </div>
  );
};

const Parent = () => {
  const user = {
    name: 'user',
    age: 12,
    settings: {
      meta: '$213',
    },
  };

  setTimeout(() => {
    console.log(user.name);
    console.log(user.age);
    console.log(user.settings.meta);
  }, 1000);

  console.log('render Parent -----');

  return <Children name={user.name} settings={user.settings} />;
};
