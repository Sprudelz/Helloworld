
import { useState, useEffect } from 'react';
import './index.css';

const snippets = [
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Go",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "C#",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Go",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Java",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Java",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Go",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Java",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Python",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Python",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "C++",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "C++",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "C#",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Java",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Go",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Python",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Python",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "C#",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Go",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Go",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Java",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Go",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "Python",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Java",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Go",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Python",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Python",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Java",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "C#",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Java",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Java",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "C#",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "C++",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "Python",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Java",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Go",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "C#",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "C++",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Python",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Go",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "C#",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Go"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Java",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Java",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "C++",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "C++",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Python",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "C++",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Python",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Python",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Go",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Go",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "C++",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "C++",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Python",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Python",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "Python",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "Python",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Java",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "Go",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Python",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Java",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "C#",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Go",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Go",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "Go",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Java",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "C#",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Go",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "C#",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Python",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Go",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Go",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "C#",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Java",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Go",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "C++",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Go",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Java",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Go",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Python",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Python",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Java",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Python",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Java",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C#",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Go",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Python",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Go",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "C++",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Python",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Go",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Java",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Python",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Java",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "C#",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Java",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "C++",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Python",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "C#",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Java",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Python",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Python",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Python",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "C#",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Python",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "PHP",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "C#",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Java",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Python",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "C#",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Go",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "C++",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Python",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "C++",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Go",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Python",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Go",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C++",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Swift",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "Python"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Java",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "C++",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Java",
      "Python",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C++",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Python",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Python",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "PHP",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Go",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Python",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "Rust",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Java",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Rust",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Java",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "C#",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "Java",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "C#",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Rust",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Java",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Java",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C#",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "C#",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "Ruby",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "C#",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Python",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Java",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Kotlin",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "C++",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "C++",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "C++",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C#",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Rust",
      "Java",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "C#",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Kotlin",
      "Go",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "C++",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "JavaScript",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "C++",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Go"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Python",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Java",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Go",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Python",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "C++",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Kotlin",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Go",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Java",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "C++",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "Go",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "C#",
      "Swift",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Python"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "C#",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Java",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Python",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Python",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Go",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Go",
      "Python",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Python",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Ruby",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Swift",
      "Java",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "C#",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "Java",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "Swift",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "C#",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C++",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Java",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Go",
      "JavaScript",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "C#",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "JavaScript",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "Ruby",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "C++",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "C#",
      "C++"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "JavaScript",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "Swift",
      "C++",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C++",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "C++",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Ruby",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "Java",
      "C#",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Kotlin",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Python",
      "Java",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Java",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Java",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Kotlin",
      "C#",
      "C++",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Go",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C#",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Kotlin",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Go",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "Go",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "C++"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Ruby",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Kotlin",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Kotlin",
      "Ruby"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Swift",
      "C++",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Python",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Kotlin",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "C++",
      "Java"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Swift",
      "Python",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Go",
      "Java",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "Java"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Java",
      "C#"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "PHP",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Go",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Go",
      "PHP",
      "Swift"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "PHP",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C++",
      "Go",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "C++",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Python",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "PHP",
      "C++",
      "Go"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "PHP",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Java",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Java",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Ruby",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C#",
      "Go",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Swift",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "C#",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Kotlin",
      "Ruby",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Ruby",
      "C#",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "C++",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "Python",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "PHP",
      "Kotlin"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "PHP",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "Kotlin",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Java",
      "C++"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "Kotlin",
      "Java",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Python",
      "Rust",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Swift",
      "PHP",
      "Python",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "C++",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "Swift",
      "Java",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "Swift",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Kotlin",
      "Java",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "Java",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "C++",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Rust",
      "C++",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "C++"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "Ruby",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "JavaScript",
      "C#",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "JavaScript",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "C++",
      "Java",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Java",
      "Ruby",
      "Python",
      "Go"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "PHP",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "Kotlin",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Go",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "PHP",
      "Java",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Swift",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Ruby",
      "Go",
      "C++"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "Python",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Go",
      "JavaScript",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "C#",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "Rust",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Java",
      "Kotlin",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Python",
      "PHP",
      "Swift",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "C++",
      "Python",
      "Go"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Go",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "C++",
      "Java",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C++",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Rust",
      "Ruby",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "PHP",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Ruby",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Ruby",
      "C++",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "C#",
      "Swift",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "C++",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Kotlin",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C++",
      "Rust",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Go",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Python",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "C++",
      "JavaScript",
      "C#"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C#",
      "Java",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Java",
      "C#",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "C++",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "JavaScript",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "Java",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "Kotlin",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Java",
      "Go",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Kotlin",
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Ruby",
      "PHP",
      "C#",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Java",
      "Ruby",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "PHP",
      "Kotlin",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "Go",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Kotlin",
      "JavaScript",
      "Go",
      "Java"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Kotlin",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Ruby",
      "JavaScript",
      "Java",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "C#",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Rust",
      "C++",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "Swift",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "Python",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Python",
      "JavaScript",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Ruby",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "Ruby",
      "PHP",
      "C#"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "Kotlin",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C#",
      "C++",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "C++",
      "Python"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "Swift"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "PHP",
      "Python",
      "Ruby",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "JavaScript",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Rust",
      "C++"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "C#",
      "JavaScript",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "C#",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "JavaScript",
      "Kotlin",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "PHP",
      "Swift",
      "C++"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "C#",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "C#",
      "Java",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "JavaScript"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C++",
      "Kotlin",
      "C#",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "C++",
      "JavaScript",
      "Java"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Kotlin",
      "Python"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "JavaScript",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Java",
      "C++",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "C++",
      "Go",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Java",
      "JavaScript",
      "PHP",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C++",
      "Java",
      "Go",
      "Python"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "C#",
      "Rust",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "JavaScript",
      "Go",
      "C#",
      "C++"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Python",
      "Go",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Rust",
      "Go",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Ruby",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "C#",
      "Ruby",
      "Java",
      "Python"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "Java",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Python",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Rust",
      "Kotlin",
      "Swift",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "C++",
      "Go",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "C++",
      "Rust",
      "Java",
      "C#"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "C#",
      "Python",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Java",
      "Go"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "Rust",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Rust",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "PHP",
      "Ruby",
      "C#"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "JavaScript",
      "Rust",
      "C++",
      "Python"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "PHP",
      "Python",
      "C++",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Java",
      "Kotlin",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Rust",
      "PHP",
      "C#",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "C++",
      "JavaScript",
      "Go",
      "Java"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "Ruby",
      "C#",
      "Swift",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "C#",
      "JavaScript",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "Java",
      "Swift",
      "Go"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "Swift",
      "C#",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "PHP",
      "Swift",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Swift",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C++",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "PHP",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Go",
      "C++",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "C++",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Swift",
      "Rust",
      "JavaScript",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Rust",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Python",
      "Kotlin"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "C#"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}",
    "language": "C#",
    "type": "loop",
    "options": [
      "Java",
      "Python",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Rust",
      "C#",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Ruby",
      "JavaScript",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "C++",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C++",
      "Ruby",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Rust",
      "C#",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Python",
      "Rust",
      "C++",
      "Swift"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Kotlin",
      "Swift",
      "C++",
      "Java"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "Go",
      "Swift",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Java",
      "PHP",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Go",
      "Kotlin",
      "C#",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "C#",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Ruby",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "Java",
      "Rust",
      "JavaScript",
      "Go"
    ]
  },
  {
    "code": "for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}",
    "language": "Go",
    "type": "loop",
    "options": [
      "Ruby",
      "Swift",
      "Go",
      "C++"
    ]
  },
  {
    "code": "<?php\necho \"Hello, world!\";",
    "language": "PHP",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "C++",
      "Python",
      "JavaScript",
      "Kotlin"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "C++",
      "C#"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Go",
      "Rust",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Rust",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Swift",
      "Ruby",
      "PHP",
      "Java"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Ruby",
      "C++",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "PHP",
      "Go",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C++",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "C#",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Kotlin",
      "Python",
      "Swift",
      "Rust"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "Python"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "Swift",
      "JavaScript",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "PHP",
      "Python",
      "C#",
      "Rust"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "JavaScript",
      "Kotlin",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Rust",
      "Go"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "Swift",
      "Rust",
      "PHP"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "JavaScript",
      "Java",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "val x = 42",
    "language": "Kotlin",
    "type": "variable",
    "options": [
      "JavaScript",
      "Go",
      "Rust",
      "Kotlin"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "PHP",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "console.log('Hello, world!');",
    "language": "JavaScript",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Java",
      "PHP"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "PHP",
      "JavaScript",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}",
    "language": "PHP",
    "type": "loop",
    "options": [
      "Python",
      "C#",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "x = 42",
    "language": "Ruby",
    "type": "variable",
    "options": [
      "Go",
      "Ruby",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Python",
      "Rust"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Python",
      "Go",
      "C#",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Rust",
      "Kotlin",
      "Go"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Python",
      "Swift",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "Java",
    "type": "variable",
    "options": [
      "C++",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "Go",
      "Ruby",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "C#",
      "Ruby",
      "PHP"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C++",
      "Go",
      "C#",
      "Ruby"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "Rust",
      "Java",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Python",
      "JavaScript",
      "Ruby",
      "Kotlin"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Java",
      "Python",
      "PHP",
      "Go"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Python",
      "Swift",
      "Java"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C++",
      "C#",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "Java",
      "PHP",
      "JavaScript",
      "Rust"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Kotlin",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "x = 42",
    "language": "Python",
    "type": "variable",
    "options": [
      "Python",
      "PHP",
      "C#",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Rust",
      "JavaScript",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Rust",
      "Python",
      "Java",
      "Kotlin"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "Go",
      "C++",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "C++",
      "JavaScript"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C++",
      "Kotlin",
      "C#"
    ]
  },
  {
    "code": "Console.WriteLine(\"Hello, world!\");",
    "language": "C#",
    "type": "hello_world",
    "options": [
      "C#",
      "C++",
      "Ruby",
      "Go"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "$x = 42;",
    "language": "PHP",
    "type": "variable",
    "options": [
      "Kotlin",
      "C++",
      "Swift",
      "PHP"
    ]
  },
  {
    "code": "for i in 0..4 {\n  println!(\"{}\", i);\n}",
    "language": "Rust",
    "type": "loop",
    "options": [
      "Swift",
      "C#",
      "Rust",
      "Python"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Go",
      "Kotlin",
      "Rust",
      "JavaScript"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Ruby",
      "JavaScript",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "print('Hello, world!')",
    "language": "Python",
    "type": "hello_world",
    "options": [
      "Ruby",
      "Go",
      "PHP",
      "Python"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    "language": "Java",
    "type": "loop",
    "options": [
      "PHP",
      "Java",
      "Go",
      "Rust"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "Go",
      "C#",
      "C++",
      "Ruby"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "PHP",
      "Kotlin",
      "Java",
      "Ruby"
    ]
  },
  {
    "code": "for i in 0..<5 {\n  print(i)\n}",
    "language": "Swift",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "C++",
      "Kotlin"
    ]
  },
  {
    "code": "for (int i = 0; i < 5; i++) {\n  std::cout << i << std::endl;\n}",
    "language": "C++",
    "type": "loop",
    "options": [
      "C++",
      "Python",
      "Rust",
      "Java"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Rust",
      "PHP",
      "Go",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "C#",
      "Go",
      "Kotlin",
      "Java"
    ]
  },
  {
    "code": "for (i in 0..4) {\n  println(i)\n}",
    "language": "Kotlin",
    "type": "loop",
    "options": [
      "Kotlin",
      "Swift",
      "Go",
      "PHP"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "C#",
      "Kotlin",
      "Java",
      "Rust"
    ]
  },
  {
    "code": "print(\"Hello, world!\")",
    "language": "Swift",
    "type": "hello_world",
    "options": [
      "Go",
      "PHP",
      "Swift",
      "Kotlin"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Go",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "5.times do |i|\n  puts i\nend",
    "language": "Ruby",
    "type": "loop",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Java"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Kotlin",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Swift",
      "JavaScript",
      "Python",
      "C++"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "C++",
      "PHP",
      "Go",
      "Python"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "C++",
      "Ruby",
      "Go",
      "Swift"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Kotlin",
      "PHP",
      "Rust"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "C#",
      "Rust",
      "Java",
      "C++"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Rust",
      "Ruby",
      "Python",
      "Java"
    ]
  },
  {
    "code": "int x = 42;",
    "language": "C#",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Ruby",
      "Rust"
    ]
  },
  {
    "code": "var x = 42",
    "language": "Swift",
    "type": "variable",
    "options": [
      "Swift",
      "C#",
      "Python",
      "JavaScript"
    ]
  },
  {
    "code": "fun main() {\n  println(\"Hello, world!\")\n}",
    "language": "Kotlin",
    "type": "hello_world",
    "options": [
      "Swift",
      "Kotlin",
      "Python",
      "C#"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "JavaScript",
      "Ruby",
      "Go",
      "C#"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "Rust",
      "C#",
      "Python"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "PHP",
      "C#",
      "Rust",
      "Ruby"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "PHP",
      "Swift",
      "JavaScript",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "JavaScript",
      "Ruby",
      "Rust",
      "Swift"
    ]
  },
  {
    "code": "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello, world!\")\n}",
    "language": "Go",
    "type": "hello_world",
    "options": [
      "Go",
      "Java",
      "Ruby",
      "Swift"
    ]
  },
  {
    "code": "#include <iostream>\nint main() {\n  std::cout << \"Hello, world!\";\n  return 0;\n}",
    "language": "C++",
    "type": "hello_world",
    "options": [
      "C#",
      "Python",
      "Java",
      "C++"
    ]
  },
  {
    "code": "for i in range(5):\n    print(i)",
    "language": "Python",
    "type": "loop",
    "options": [
      "Java",
      "C++",
      "Python",
      "PHP"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "PHP",
      "Ruby",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "JavaScript",
    "type": "variable",
    "options": [
      "JavaScript",
      "Swift",
      "Ruby",
      "C++"
    ]
  },
  {
    "code": "fn main() {\n  println!(\"Hello, world!\");\n}",
    "language": "Rust",
    "type": "hello_world",
    "options": [
      "Kotlin",
      "Rust",
      "Python",
      "Ruby"
    ]
  },
  {
    "code": "let x = 42;",
    "language": "Rust",
    "type": "variable",
    "options": [
      "JavaScript",
      "Python",
      "Kotlin",
      "Rust"
    ]
  },
  {
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    "language": "JavaScript",
    "type": "loop",
    "options": [
      "Go",
      "C#",
      "Kotlin",
      "JavaScript"
    ]
  },
  {
    "code": "puts 'Hello, world!'",
    "language": "Ruby",
    "type": "hello_world",
    "options": [
      "PHP",
      "Ruby",
      "Python",
      "Swift"
    ]
  },
  {
    "code": "System.out.println(\"Hello, world!\");",
    "language": "Java",
    "type": "hello_world",
    "options": [
      "Go",
      "Rust",
      "Java",
      "Swift"
    ]
  },
  {
    "code": "var x int = 42",
    "language": "Go",
    "type": "variable",
    "options": [
      "PHP",
      "C++",
      "Go",
      "Kotlin"
    ]
  }
];

export default function HelloWorldGame() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(snippets[0]);

  useEffect(() => {
    setCurrent(snippets[index]);
  }, [index]);

  const handleAnswer = (answer: string) => {
    if (answer === current.language) {
      setScore(score + 1);
      setFeedback('Richtig!');
    } else {
      setFeedback(`Falsch. Richtige Antwort: ${current.language}`);
    }
    setTimeout(() => {
      setFeedback('');
      setIndex((prev) => (prev + 1) % snippets.length);
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Hello World Game</h1>
      <pre style={{ backgroundColor: '#000', color: '#0f0', padding: '1rem', borderRadius: '8px' }}>
        {current.code}
      </pre>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        {current.options.map((opt: string) => (
          <button key={opt} onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>{feedback}</p>
      <p style={{ textAlign: 'center' }}>Punkte: {score}</p>
    </div>
  );
}
