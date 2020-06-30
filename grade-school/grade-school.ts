export default class GradeSchool {
  roster: Map<number, string[]>;

  constructor() {
    this.roster = new Map<number, string[]>();
  }

  addStudent(name: string, grade: number): void {
    const students = [...this.studentsInGrade(grade), name];
    this.roster.set(grade, students.sort());
  }

  studentsInGrade(grade: number): string[] {
    const students = this.roster.get(grade);
    return students ? [...students] : [];
  }

  studentRoster(): Map<string, string[]> {
    const entries = Array.from(this.roster.entries());
    return new Map<string, string[]>(
      entries.map(([key, value]) => [key.toString(), [...value]]),
    );
  }
}
