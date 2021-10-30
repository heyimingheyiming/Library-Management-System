// book.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。
//

#include <iostream>
using namespace std;
#include<string.h>
#include <fstream>
#include <iostream>
#include<sstream>
#include <iostream>
//书模块及基本操作函数
//增删改查
//增添书，删除书，读取信息，更改书的信息
//获得书的数量 是否能打开书的列表 


void delLine(const char* filename, int line_index)
{
	string s(istreambuf_iterator<char>(ifstream(filename).rdbuf()), istreambuf_iterator<char>());
	string::iterator it1 = s.begin();
	while (line_index-- > 0)
	{
		it1 = find(it1, s.end(), '\n') + 1;
	}
	string::iterator it2 = find(it1, s.end(), '\n') + 1;
	s.erase(it1, it2);
	copy(s.begin(), s.end(), ostreambuf_iterator<char>(ofstream(filename).rdbuf()));
}

int main()
{
	delLine("C:\\Users\\习\\source\\repos\\book\\book.txt", 1); // 示例，删除第2行，注意行号从0开始算
	return 0;
}


/*
class Book {
private://九个变量
	string Name;//书名
	string Id;//编号
	string Author;//作者
	string Cat;//分类
	string Location;//所放位置
	string Addr;//出版社
	string Time;//出版时间
	string Hold;//馆藏数量
	string Available;//可借数量
public:
	Book();//构造函数
	~Book();//析构函数
	Book(string a, string b, string c, string d, string e, string f, string g, string h,string i);
	string get_Id();
	string get_Name();
	string get_Author();
	string get_Location();
	string get_Cat();
	string get_Addr();
	string get_Time();
	string get_Hold();
	//增加
	void write();
	//删除
	void dele();
	//修改
	void revise();
	//查找
	void search();
};
Book::Book()
{
	Id = "0";
	Name = "empty";
	Author = "empty";
	Cat = "empty";
	Location = "empty";
	Addr = "empty";
	Time = "empty";
	Hold='0';
	Available = '0';
}

Book::~Book() {}
Book::Book(string a, string b, string c, string d, string e, string f, string g, string h,string i)
{

	Id = b;
	Name = a;
	Author = c;
	Cat = d;
	Location = e;
	Addr = f;
	Time = g;
	Hold = h;
	Available = i;
}
//增加图书
string Book::get_Id()
{
	return Id;
}
string Book::get_Name()
{
	return Name;
}
string Book::get_Author()
{
	return Author;
}
string Book::get_Cat()
{
	return Cat;
}
string Book::get_Location()
{
	return Location;
}
string Book::get_Addr()
{
	return Addr;
}
string Book::get_Time()
{
	return Time;
}
string Book::get_Price()
{
	return Price;
}
///
void Book::change(string a, string b, string c, string d, string e, string f, string g, string h)
{
	Id = a;
	Name = b;
	Author = c;
	Cat = d;
	Location = e;
	Addr = f;
	Time = g;
	Price = h;
}
void Book::display()
{

	cout << "*" << setw(10) << Id;
	cout << "   *" << setw(10) << Name;
	cout << "   *" << setw(10) << Author;
	cout << "   *" << setw(10) << Cat;
	cout << "   *" << setw(10) << Location;
	cout << "   *" << setw(10) << Addr;
	cout << "   *" << setw(10) << Time;
	cout << "   *" << setw(10) << Price << "*";
	cout << endl;//一条纪录						
///
}
int Book::length()
{
	int i = 0;
	string temp;
	ifstream fin("book.txt");
	while (getline(fin, temp))
		i += 1;
	fin.close();
	return i;
}

bool Book::canopen()
{
	ifstream fin1("book.txt");
	if (fin1)
		return 1;
	else
		return 0;
	fin1.close();
}

void Book::write()
{
	ofstream outfile("book.txt", ios::app);



	outfile << Id << "\t" << Name << "\t" << Author << "\t" << Cat << "\t" << Location << "\t" << Addr << "\t" << Time << "\t" << Price << "\t" << endl;
	outfile.close();
}

int main()
{
	Book book;
	int n;
	//book.write();
	book.revise();

	
	string s;
	cin >> s;
	for (int i = 0; i < s.length(); i++) {
		cout << s.at(i);
	}
	
	
}
*/


// 运行程序: Ctrl + F5 或调试 >“开始执行(不调试)”菜单
// 调试程序: F5 或调试 >“开始调试”菜单

// 入门使用技巧: 
//   1. 使用解决方案资源管理器窗口添加/管理文件
//   2. 使用团队资源管理器窗口连接到源代码管理
//   3. 使用输出窗口查看生成输出和其他消息
//   4. 使用错误列表窗口查看错误
//   5. 转到“项目”>“添加新项”以创建新的代码文件，或转到“项目”>“添加现有项”以将现有代码文件添加到项目
//   6. 将来，若要再次打开此项目，请转到“文件”>“打开”>“项目”并选择 .sln 文件
