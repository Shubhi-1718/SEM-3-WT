package check;
interface Ab{
	void run();
}
class B implements Ab{
	public void run() {
		System.out.print("hjfd");
	}
}
public class CheckMuliple {
	public static void main(String args[]) {
		B ab = new B();
		ab.run();
		System.out.print("hjfd");
	}
}
