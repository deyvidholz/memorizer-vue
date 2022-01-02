export function save(data) {
  localStorage.setItem("words", JSON.stringify(data));
}

export function findOne(id) {
  const data = find();

  return data.find((word) => word.id === id);
}

export function create(name, translation) {
  if (!name || !translation) {
    return;
  }

  const data = find();

  const alreadyExists = data.some(
    (word) => word.name.toLowerCase() === name.toLowerCase()
  );

  if (alreadyExists) {
    return;
  }

  data.push({
    id: data.length + 1,
    name,
    translation,
    sequentialHits: 0,
  });

  save(data);
}

export function update(id, { name, translation, sequentialHits }) {
  const data = find();
  let word = data.find((word) => word.id === id);

  if (!word) {
    return;
  }

  word.name = name || word.name;
  word.translation = translation || word.translation;

  word.sequentialHits =
    sequentialHits === undefined ? word.sequentialHits : sequentialHits;

  save(data);
  return word;
}

export function remove(id) {
  const data = find();
  let index = data.findIndex((word) => word.id === id);

  if (index === -1) {
    return;
  }

  data.splice(index, 1);
  save(data);
}

export function find() {
  let data = localStorage.getItem("words");

  if (!data) {
    data = JSON.stringify([]);
    save(data);
  }

  return JSON.parse(data);
}

export function getRandomWord(except = []) {
  let data = find();

  if (except.length) {
    data = data.filter((word) => !except.includes(word.id));
  }

  return data[Math.floor(Math.random() * data.length)];
}
