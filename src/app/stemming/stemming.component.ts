import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-stemming',
  templateUrl: './stemming.component.html',
  styleUrls: ['./stemming.component.css']
})
export class StemmingComponent implements OnInit {
  data: any = [];
  dataFlag = false;
  stemData: any = [];
  stemDataFlag = false;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.appendData()
  }

  eventFire(data) {
    this.stemDataFlag = false;
    this.stemData = [];
    let dat = data.text.split(" ");
    let datToPass = [];
    for(let i of dat) {
      datToPass.push(i);
    }
    this.backend.getStemming(datToPass)
      .subscribe(
        (result: any) => {
          let count = 1;
          for (let k of result.tokens) {
            let dic = {"count": count, "token": k.token, "start_offset": k.start_offset, "end_offset": k.end_offset, "position": k.position };
            count++;
            this.stemData.push(dic);
          }
        }
      );
    this.stemDataFlag = true;
  }

  appendData() {
    let d1 = {
      "type": "question",
      "text": "I was presented with this question in an end of module open book exam today and found myself lost. i was reading Head first Javaand both definitions seemed to be exactly the same. i was just wondering what the MAIN difference was for my own piece of mind. i know there are a number of similar questions to this but, none i have seen which provide a definitive answer.Thanks, Darren",
      "code": ""
    };
    let d2 = {
      "type": "answer accepted-answer",
      "text": "Inheritance is when a 'class' derives from an existing 'class'.So if you have a Person class, then you have a Student class that extends Person, Student inherits all the things that Person has.There are some details around the access modifiers you put on the fields/methods in Person, but that's the basic idea.For example, if you have a private field on Person, Student won't see it because its private, and private fields are not visible to subclasses.Polymorphism deals with how the program decides which methods it should use, depending on what type of thing it has.If you have a Person, which has a read method, and you have a Student which extends Person, which has its own implementation of read, which method gets called is determined for you by the runtime, depending if you have a Person or a Student.It gets a bit tricky, but if you do something likePerson p = new Student();p.read();the read method on Student gets called.Thats the polymorphism in action.You can do that assignment because a Student is a Person, but the runtime is smart enough to know that the actual type of p is Student.Note that details differ among languages.You can do inheritance in javascript for example, but its completely different than the way it works in Java.",
      "code": ""
    };
    let d3 = {
      "type": "answer",
      "text": "Polymorphism: The ability to treat objects of different types in a similar manner.Example: Giraffe and Crocodile are both Animals, and animals can Move.If you have an instance of an Animal then you can call Move without knowing or caring what type of animal it is.Inheritance: This is one way of achieving both Polymorphism and code reuse at the same time.Other forms of polymorphism:There are other way of achieving polymorphism, such as interfaces, which provide only polymorphism but no code reuse (sometimes the code is quite different, such as Move for a Snake would be quite different from Move for a Dog, in which case an Interface would be the better polymorphic choice in this case.In other dynamic languages polymorphism can be achieved with Duck Typing, which is the classes don't even need to share the same base class or interface, they just need a method with the same name.Or even more dynamic like Javascript, you don't even need classes at all, just an object with the same method name can be used polymorphically.",
      "code": ""
    };
    let d4 = {
      "type": "question",
      "text": "I found out that the above piece of code is perfectly legal in Java. I have the following questions. ThanksAdded one more question regarding Abstract method classes.",
      "code": "public class TestClass{public static void main(String[] args) {TestClass t = new TestClass();}private static void testMethod(){abstract class TestMethod{int a;int b;int c;abstract void implementMe();}class DummyClass extends TestMethod{void implementMe(){}}DummyClass dummy = new DummyClass();}}"
    };
    let d5 = {
      "type": "question",
      "text": "In java it's a bit difficult to implement a deep object copy function. What steps you take to ensure the original object and the cloned one share no reference? ",
      "code": ""
    };
    let d6 = {
      "type": "answer",
      "text": "You can make a deep copy serialization without creating some files. Copy: Restore:",
      "code": "ByteArrayOutputStream bos = new ByteArrayOutputStream();ObjectOutputStream oos = new ObjectOutputStream(bos);oos.writeObject(object);oos.flush();oos.close();bos.close();byte[] byteData = bos.toByteArray();; ByteArrayInputStream bais = new ByteArrayInputStream(byteData);(Object) object = (Object) new ObjectInputStream(bais).readObject();"
    };
    let d7 = {
      "type": "answer",
      "text": "Java has the ability to create classes at runtime. These classes are known as Synthetic Classes or Dynamic Proxies. See for more information. Other open-source libraries, such as and also allow you to generate synthetic classes, and are more powerful than the libraries provided with the JRE. Synthetic classes are used by AOP (Aspect Oriented Programming) libraries such as Spring AOP and AspectJ, as well as ORM libraries such as Hibernate. ",
      "code": ""
    };
    let d8 = {
      "type": "answer accepted-answer",
      "text": "A safe way is to serialize the object, then deserialize.This ensures everything is a brand new reference.about how to do this efficiently. Caveats: It's possible for classes to override serialization such that new instances are created, e.g. for singletons.Also this of course doesn't work if your classes aren't Serializable.",
      "code": ""
    };
    let d9 = {
      "type": "answer",
      "text": " comment this code       ",
      "code": "/*if (savedinstancestate == null) {     getsupportfragmentmanager().begintransaction()             .add(r.id.container  new placeholderfragment())             .commit(); }*/  "
    };
    let d10 = {
      "type": "question",
      "text": "     in a class i can have as many constructors as i want with different argument types. i made all the constructors as private it didn't give any error because my implicit default constructor was public but when i declared my implicit default constructor as private then its showing an error while extending the class.  why?       this works fine         this can not be inherited       ",
      "code": "public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;        }      demo4(string name) {         this.name=name;     }      demo4() {         this(\"unknown\"  20);         this.sal=2000;     }      void show(){         system.out.println(\"name\"+name);         system.out.println(\"age: \"+age);     } }  public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;     }      demo4(string name) {         this.name=name;     }      private demo4() {         this(\"unknown\"  20);         this.sal=2000;     }      void show() {         system.out.println(\"name\"+name);         system.out.println(\"age: \"+age);     } }  "
    };
    this.data.push(d1);
    this.data.push(d2);
    this.data.push(d3);
    this.data.push(d4);
    this.data.push(d5);
    this.data.push(d6);
    this.data.push(d7);
    this.data.push(d8);
    this.data.push(d9);
    this.data.push(d10);
    this.dataFlag = true;
  }
}
