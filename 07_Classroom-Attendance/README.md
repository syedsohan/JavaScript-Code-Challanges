# Classroom Attendance

## What You'll Do

Given an object, classroom, return an array of student names

- The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)

```js
  {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  }
```

- The teacher will always be the first item in the classList array
- If `hasTeachingAssistant` is true, the teaching assistant will be the second item in the classList array

## Requirements

- Use object and array destructuring

## Output

```js
[ 'John', 'Roman', 'Lisa', 'Omair', 'Lukas' ]
```
