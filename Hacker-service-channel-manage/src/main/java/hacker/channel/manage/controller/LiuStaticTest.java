package hacker.channel.manage.controller;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 18:26
 */
public class LiuStaticTest {

        public static void main(String[] args) {

            //测试一下输出顺序和a、b的值
            staticFunction();
        }

        //静态初始化过程中有对象初始化----会中断静态初始化
        //非静态的代码块也属于成员是放在堆中的，new 对象就是初始化堆中的内容 代码块 又会比构造先执行  所以就先2了-----个人理解

        //静态变量
        static LiuStaticTest st = new LiuStaticTest();

        int a = 10;
        static int b = 11;

        //静态代码块
        static {
            System.out.println("1");
            System.out.println("静态代码块");
            System.out.println("-----------------------");
        }

        //代码块
        {
            System.out.println("2");
            System.out.println("代码块");
            System.out.println("-----------------------");
        }

        //构造方法
        LiuStaticTest() {
            System.out.println("3");
            System.out.println("a=" + a + "," + "b=" + b);
            System.out.println("构造方法");
            System.out.println("-----------------------");
        }

        public static void staticFunction() {
            System.out.println("4");

            System.out.println("静态变量放在最前面,静态初始化过程中有对象初始化,会中断静态初始化,执行结果是2、3 a=10,b=0、1、4");
            System.out.println("静态变量放在静态方法后面，不会被初始化，代码块 又会比构造先执行，执行结果就是1、2、3 a=10,b=11、4");
        }


}
