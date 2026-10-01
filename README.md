# IT313 Components and JSX

## Problem

This project is a Student Roster Card Renderer using React Native and Expo.

The application displays a list of students as reusable cards. Each card shows the student's name, course, and units enrolled.

## StudentCard Component

The StudentCard component receives these props:

- name
- course
- units
- isFullLoad

The props are destructured in the function and displayed using JSX.

The Full Load label is displayed only when isFullLoad is true.

## StudentRoster Component

The StudentRoster component contains the student data.

It uses the .map() method to create one StudentCard for each student.

Each card uses the student's ID as its key:

```tsx

```
