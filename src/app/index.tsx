import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

function StudentRoster() {
  const [reversed, setReversed] = useState(false);

  const displayedStudents = reversed ? [...students].reverse() : students;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.total}>Total Students: {students.length}</Text>

      <Button title="Reverse Roster" onPress={() => setReversed(!reversed)} />

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

export default function App() {
  return <StudentRoster />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  fullLoad: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
