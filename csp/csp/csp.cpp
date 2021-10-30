// csp.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。
//
#include <iostream>
#include<string>
using namespace std;
//#include<stack>
#include<vector>
#include<algorithm>
//#include <bits/stdc++.h>
//#include<map>
//#include<unordered_map>
//const int N = 100000;
//int y[N];
//int results[N];
const int N = 500;
//int a[N][N];
//int b[N];

int main() {
    int x,y=0,i=0;
    cin >> x;
    /*
    while (x != 0) {
        int b = x % 10;
        cout << b<<" ";
        //y +=b * pow(10, i);
        x = x / 10;
        //i++;
    }
    */
    int k = x;
    while (k/10 != 0) {
        k = k / 10;
        i++;
    }
    while (x != 0) {
        y += x % 10 * pow(10, i--);
        x = x / 10;
    }
    cout << y;
}
/*
int main() {
    int m[91] = { 0 };
    m['a'] = 1;
    int x = '0';
    char c = 0 + 48;
    cout << c << " ";
    cout << x << " ";
    cout << m['a'];
    cout << '91'<<" ";
    cout << ('0' - 48);
}

/*
int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n; cin >> n;
    int a[4][4] = { 0 };
    int b[4] = { 0 };
    int* c;
    c = new int[n];
    memset(c, 0, sizeof c);
}

/*
int main() {
    int n;
    cin >> n;
    int** p;
    p = new int* [n];
    for (int i = 0; i < n; i++) {
        p[i] = new int[n];
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> p[i][j];
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << p[i][j];
        }
    }
}
/*
int main() {
    int n,x;
    cin >> n;
    //vector<vector<int>> a(n,vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    int max = 2 * n - 2;
    for (int i = 0; i <= max; i++) {
        if (i % 2 != 0) {
            for (int j = 0; j < n && j <= i; j++) {
                if ((i - j) < n) {
                    cout << a[j][i - j]<<" ";
                }
            }
        }
       
        else if (i % 2 == 0) {
            int max2;
            if (i > n-1) max2 = n-1;
            else max2 = i;
            for (int j = max2; j >= 0; j--) {
                if (i - j < n) {
                    cout << a[j][i - j]<<" ";
                }
                if (i - j > n) break;
            }
        }
    }
}
/*
const int N = 1000;
int x[N] = { 0 };
int main() {
    int n,y;
    cin >> n;
    int* z;
    z = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> y;
        z[i] = ++x[y];
    }
    for (int i = 0; i < n; i++) {
        cout << z[i]<<" ";
    }
}

/*
int main() {
    int a[15][10], x;
    int row[4];
    int col[4];
    for (int i = 0; i < 15; i++) {
        for (int j = 0; j < 10; j++) {
            cin >> a[i][j];
        }
    }
    int b[4][4];
    int k = 0;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            cin >> b[i][j];
            if (b[i][j] == 1) {
                row[k] = i;
                col[k] = j;
                k++;
            }
        }
    }
    cin >> x;
    int min[4] = { -1,-1,-1,-1 };
    for (int j = 0; j < 4; j++) {
        for (int i = 0; i < 4; i++) {
            if (b[i][j] == 1) {
                min[j] = i;
            }
        }
    }
    int min3[4];
    int min2 = 5, max = -1, maxi = 0;
    for (int i = 0; i < 4; i++) {
        if (min[i] != -1 && min[i] < min2) {
            min2 = min[i];
        }
        if (min[i] > max) {
            max = min[i];
            maxi = i;
        }
    }
    for (int i = 0; i < 4; i++) {
        if (min[i] == -1) {
            min3[i] = -15;
            continue;
        }
        if (min[i] == min2) {
            min3[i] = 0;
            continue;
        }
        else if (min[i] == min2 + 1) {
            min3[i] = 1;
            continue;
        }
        else if (min[i] == min2 + 2) {
            min3[i] = 2;
            continue;
        }
        else if (min[i] == min2 + 3) {
            min3[i] = 3;
            continue;
        }
    }
  //  for (int i = 0; i < 4; i++) {
    //    cout << min3[i] << " ";
    //}
    //cout << endl;
    max = min3[maxi];
   // cout << max;
    int row4, col4, colb, rowa, cha2, cha3;
    int flag = 0;
    for (int i = 0 - max; i < 15; i++) {
        for (int j = x; j <= x + 3; j++) {
            if (i + min3[j - x + 1] >= 0&& i + min3[j - x + 1]<15) {
                if (a[i + min3[j - x + 1]][j] == 1) {
                    row4 = i + min3[j - x + 1]-1;
                    col4 = j;
                    colb = j - x + 1;
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 1) break;
    }
    cout << row4 << " " << col4 << endl;
    for (int i = 0; i < 4; i++) {
        if (b[i][colb] == 1) {
            rowa = i;
        }
    }
    cout << rowa << " " << colb << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (b[i][j] == 1) {
                cha2 = i - row4;
                cha3 = j - col4;
                a[i - rowa + row4][j - colb + col4] = 1;
            }
        }
    }

    for (int i = 0; i < 15; i++) {
        for (int j = 0; j < 10; j++) {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}

    /*
    int col2,row2,col3,row3,cha;
    for (int i = 0; i < 15; i++) {
        for (int j = x-1; j <=x+3 ; j++) {
            if (a[i][j] == 1) {
                col2 = j - x + 1;
                row3 = i;
                //判断别的行不行
                for (int p = 0; p < 4; p++) {
                    if (b[p][col2] == 1) {
                        row2 = p;
                    }
                }
                for (int q = 0; q < 4; q++) {
                    if (row[q] > row2) {
                        col3 = col[q];
                        cha = row[q] - row2;
                    }
                    if (a[row3 + cha][col3 + x - 1] == 1) {

                    }
                }
            }
        }
    }




    int flag = 0,cols=1;
    for (int i = 1; i < 4; i++) {
        flag = 0;
        for (int j = i-1; j>=0; j--) {
            if (col[i] == col[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) cols++;//共有几列
    }
    cin >> x;
    int minx[4] = { 0 };
    for (int i = 0; i < 15;i++) {
        for (int j = x; j < x + cols; j++) {
            if (a[i][j] == 1&&minx[j-x]==0) {
                minx[j - x] = i;//每一列最高那一个
            }
        }
    }
    //每次取最高的
    int max = 0,maxi=0;
    for (int i = 0; i < 4; i++) {
        if (max > minx[i]) {
            max = minx[i];
            maxi = i;
            minx[i] = 0;
            break;
        }
    }
    //取出最高的
    //看行有没有越过此行的
    int y = col[maxi];

}

/*
int main() {
    int n,num=0;
    cin >> n;
    int* x;
    x = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }
    for (int i = 1; i < n-1; i++) {
        if (x[i] > x[i - 1] && x[i] > x[i + 1]) num++;
        if (x[i]<x[i - 1] && x[i]<x[i + 1]) num++;
    }
    cout << num;
}


/* 90分
int main() {
    long long int m1, m2=0;
    cin >> m1;
    m1 -= 3500;
    long long int j = 1;
    int flag = 0;
    for (int i = 0; i < 7;i++) {
        if (i==0&&m1 + 45 <=1500) {
            m2 =( m1 / 0.97);
            break;
        }
        if (i==0&&m1+45>1500) {
            m2 += 1500;
            m1 -= 1500;
            m1 += 45;
            //flag = 1;
            continue;
        }
        if (i==1&&m1 + 300 <= 3000) {
            m2 += (m1 / 0.9);
            break;
        }
        if (i==1&&m1 + 300 >3000) {
            m2 += 3000;
            m1 -= 3000;
            m1 += 300;
            flag = 2;
            continue;
        }
        if (i==2&&m1 + 900 <= 4500) {
            m2 += (m1 / 0.8);
            break;
        }
        if (i==2&&m1 + 900 > 4500) {
            m2 += 4500;
            m1 -= 4500;
            m1 += 900;
            flag = 3;
            continue;
        }
        if (i==3&&m1 + 6500 <= 26000) {
            m2 += (m1 / 0.75);
            break;
        }
        if (i == 3 && m1 + (26000*0.25) > 26000) {
            m2 += 26000;
            m1 -= 26000;
            m1 += (26000 * 0.25);
            continue;
        }
        if (i == 4 && m1 + (6000) <= 20000) {
            m2 += (m1 / 0.7);
            break;
        }
        if (i == 4 && m1 + 6000 > 20000) {
            m2 += 20000;
            m1 -= 20000;
            m1 += 6000;
            continue;
        }
        if (i == 5 && m1 + (25000*0.35) <= 25000) {
            m2 += (m1 / 0.65);
            break;
        }
        if (i == 5 && m1 + (25000 * 0.35) > 25000) {
            m2 += 25000;
            m1 -= 25000;
            m1 += (25000 * 0.35);
            continue;
        }
        if (i == 6) {
            m2 += (m1 / 0.55);
            break;
        }
    }
    cout << m2+3500;
    return 0;
}
/*
int main() {
    int n;
    cin >> n;
    int* a;
    int* b;
    a = new int[n];
    b = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        b[i] = a[i];
    }
    //sort(b, b + n);
    int flag = 0;
    for (int i = 0; i < n; i++) {
        int left = 0,right=0;
        for (int j = 0; j < n; j++) {
            if (a[j]==a[i]) continue;
            if (a[j] < a[i]) left++;
            if (a[j] > a[i])right++;
        }
        if (left == right) {
            cout << a[i];
            flag = 1;
            break;
        }
        if (flag == 1) break;
    }
    if (flag == 0)cout << -1;
    return 0;
}


/*
string line, text;
void solve(){
    text = "<p>" + text.substr(0, text.size() - 1) + "</p>\n";
    cout << text;
    text = "";
}
int main() {
    bool flag = false;
    getline(cin, line);
    for (;;) {
        if (line.size() > 0)
            text += line + "\n";
        else if (line.size() == 0 && text.size() > 0) {
            solve();
        }
        if (flag) break;
        if (!getline(cin, line)) {
            flag = true;
            line = "";
        }
    }

}

/*
int main() {
    int n, m, p, q;
    int* que;
    cin >> n >> m;
    que = new int[n];
    for (int i = 0; i < n; i++) {
        que[i] = i + 1;
    }
  
    for (int i = 0; i < m; i++) {
        cin >> p >> q;
        if (q < 0) {
            q = -q;
            int r=1;
            int k;
            for (k = 0; k < n; k++) {
                if (que[k] == p) {
                    break;
                }
            }
            int j = k;
            //int peo = que[p];
            while (r<=q) {
                que[j] = que[j-1];
                j--;
                r++;
            }
            que[k - q] = p;
            continue;
        }
        if (q > 0) {
            int r=1;
            int k;
            for (k = 0; k < n; k++) {
                if (que[k] == p) {
                    break;
                }
            }
            int j = k;
           // int peo = p;
            if (j+q > n-1) {
                j = n -q-1;
                q = n -q-1;
            }
            while (r<=q) {
                que[j] = que[j+1];
                j++;
                r++;
            }
            que[k + q] = p;
        }
    }
    for (int i = 0; i < n; i++) {
        cout << que[i]<<" ";
    }
    return 0;
}


/*分蛋糕
int main() {
    int n, k,x,x2,num=0;
    cin >> n >> k;
    for (int i = 0; i < n; i++) {
        cin >> x;
        while (x < k&&i<n-1) {
            cin >> x2;
            x += x2;
            i++;
        }
            num++;
    }
    cout << num;
    return 0;
}



/*
int main() {
    int n, k, num = 1;
    cin >> n >> k;
    int* win;
    win = new int[n];
    int peo = n;
    map<int, int> mp;
    //mp = { (0,1),(2,0) };
    //mp.erase(2);
    //mp.begin();
    int flag = 1;
    while (peo != 1) {
        for (int i = 0; i < n; i++) {
            /*
            if (flag == 1) {
                mp.insert(i + 1, 0);
            }
            
            if (win[i] == 1) {
                continue;
            }
            if (num % k == 0 || num % 10 == k) {
                peo--;
                win[i] = 1;
                //mp.erase(i + 1);
            }
            num++;
        }
        flag = 0;
    }
   // mp.begin();
    //cout << mp.begin();
    
    for (int i = 0; i < n; i++) {
        if (win[i]!=1) {
            cout << i+1;
            break;
        }
   }
   
    return 0;

}

int main() {
    int n,x;
    char y;
    long long int s, t,h=0;
    long long int* hs;
    cin >> n >> s >> t;
    hs = new long long int[n];
    string* str;
    str = new string[n];
    for (int i = 0,j=0; i < n; i++) {
        cin >> str[i];
        for (int p = 0; p < str[i].length(); i++) {
            j = 0;
            while (str[i][p] != ' ') {
                x +=0 ;
            }
            while (x!=0) {
                // cin >> x;
                x = y - 48;
                int z = j;
                while (z != 0) {
                    x *= 10;
                }
                h += x;
                j += 2;
            }
            hs[i] = h;
        }
    }
}


/*
int main() {
    int n,k,num=1;
    cin >> n >> k;
    int* win;
    win = new int[n];
    int peo = n;
    map<int, int> mp;
    mp = { (0,1),(2,0) };
    mp.erase(2);
    mp.begin();
    int flag = 1;
    while (peo != 1) {
        for (int i = 0; i < n; i++) {
            if (flag == 1) {
                mp.insert(i + 1, 0);
            }
            if (win[i] == 1) {
                continue;
            }
            if (num % k == 0 || num % 10 == k) {
                peo--;
                //win[i] = 1;
                mp.erase(i+1);
            }
            num++;
        }
        flag = 0;
    }
    mp.begin();
    //cout << mp.begin();
    /*
    for (int i = 0; i < n; i++) {
        if (win[i]!=1) {
            cout << i+1;
            break;
        }
   }
   
    return 0;
    
}
/* 
int main() {
    int n;
    cin >> n;
    int* num;
    num = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> num[i];
    }
    sort(num, num + n);
    int min = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (abs(num[i + 1] - num[i])<min) {
            min = abs(num[i + 1] - num[i]);
        }
    }
    cout << min;
    return 0;
}

/*钥匙盒
const int  N = 1000;

int main() {
    pair<int, int> gets[N];
    pair<int, int> give[N];
    int n, k,w,s,c;
    cin >> n >> k;
    int* key;
    int* pos;
    key = new int[n];
    pos = new int[n+1];
    for (int i = 0; i < n; i++) {
        key[i] = i + 1;
        pos[i + 1] = i;
    }
    for (int i = 0; i < k; i++) {
        cin >> w >> s>>c;
        gets[i] = make_pair(s, w);
        give[i] = make_pair(c+s, w);
    }
    sort(gets, gets + k );
    sort(give, give + k );
    int i, j;
    for ( i = 0,j=0; i < k&&j<k;) {
        if (gets[i].first < give[j].first) {
            //先借
            key[pos[gets[i].second]] = 0;
            i++;
            continue;
        }
        if (give[j].first <= gets[i].first) {
            //先还
            int m = 0;
            while (m < n&&key[m]!=0) {
                m++;
            }
            if (m < n) {
                key[m] = give[j].second;
            }
            pos[give[j].second] = m;
            j++;
        }
   }
    int m = 0;
    while (j < k) {
        while (m < n && key[m] != 0) {
            m++;
        }
        if (m < n) {
            key[m] = give[j].second;
        }
        j++;
    }
    for (int i = 0; i < n; i++) {
        cout << key[i] << " ";
    }
    return 0;
}



/*打酱油
int main() {
    int money;
    cin >> money;
    int x1 = money / 10 / 5;
    int money2 = money / 10 % 5;
    int x2 = money2 / 3;
    int x3 = money2 % 3;
    int num = x1 * 5 + x1 * 2 + x2 * 3 + x2 * 1 + x3;
    cout << num;
    return 0;
}


/*
int main() {
    int n, l, t, x;
    cin >> n >> l >> t;
    vector<int> pos;
    vector<int> di;
    for (int i = 0; i < n; i++) {
        cin >> x;
        pos.push_back(x);
       // cout << endl;
       // cout << pos[i] << " ";
        di.push_back(0);//0表示右
    }
    for (int i = 0; i < t; i++) {
        for (int j = 0; j < n; j++) {
            
            if (di[j] == 0) {
                if (pos[j] == l) {
                    di[j] = 1;
                    pos[j]--;
                }
                else {
                    pos[j]++;
                }
            }

            else if (di[j] == 1) {
                if (pos[j] > 0) {
                    pos[j]--;
                }
                else {
                    di[j] = 0;
                    pos[j]++;
                }
            }

            /*
            if (j>=1&&di[j] != di[j-1] && pos[j] == pos[j-1]) {
                di[j] = (di[j] == 1 ? 0 : 1);
                di[j-1] = (di[j-1] == 1 ? 0 : 1);
                continue;
            }
            if (j<n-1 && di[j] != di[j +1] && pos[j] == pos[j +1]) {
                di[j] = (di[j] == 1 ? 0 : 1);
                di[j+1] = (di[j+1] == 1 ? 0 : 1);
                continue;
            }
            
           
            for (int m = 0; m < n; m++) {
                if (m!=j&&di[j] != di[m] && pos[j] == pos[m]) {
                    di[j] = (di[j] == 1 ? 0 : 1);
                   di[m] = (di[m] == 1 ? 0 : 1);
                   continue;
                }
            }
            
        }
    }
    for (int i = 0; i<n; i++) {
        cout << pos[i] << " ";
    }
    return 0;
}

/*跳一跳
int main() {
    int i=0,score=0,y;
    vector<int> x;
    cin >>y ;
    while (y != 0) {
        x.push_back(y);
        cin >> y;
        i++;
    }
    int n = i, pre = 0,num=0;
    for (int i = 0; i < n; i++) {
        if (x[i] == 1) {
            score += 1;
            num = 0;
            pre = 1;
            continue;
        }
        if (x[i] == 2) {
            if (i == 0||pre==1) {
                score += 2;
                num += 2;
            }
            else if (pre == 2) {
                num += 2;
                score += num;
            }
            pre = 2;
        }
    }
    cout << score;
    return 0;
}


/*小明放学 取模
int main() {
    long long int r, y, g,n,time=0,x,t,t2;
    cin >> r >> y >> g >> n;
    for (long long int i = 0; i < n; i++) {
        cin >> x >> t;
        if (x == 0) {
            time += t;
            continue;
        } 
        if (x == 1) {
            t2 = (r-t+time) % (r + g + y);
        }
        else  if (x == 2) {
            t2 = (y - t + time + r + g) % (r + g + y);
        }
        else if (x == 3) {
            t2 = (g - t + time + r) % (r + g + y);
        }
        if (t2 <= r) {
            time += (r - t2);
            continue;
        }
        if (t2 > (r + g)) {
            time += (y-(t2-r-g)+r);
            continue;
        }
    }
    cout << time;
    return 0;  
}


/*小明上学
int main() {
    long long int r, y, g,n,time=0,x,t;
    cin >> r >> y >> g >> n;
    for (long long int i = 0; i < n; i++) {
        cin >> x >> t;
        if (x == 0) {
            time += t;
        }
        if (x == 1) {
            time += t;
        }
        if (x == 2) {
            time += (t + r);
        }
    }
    cout << time;
    return 0;
}



/*卖菜
int main() {
    int n;
    cin >> n;
    long long int* a;
    long long int* b;
    long long int* c;
    long long int* d;
    a = new long long int[n];
    b = new long long int[n];
    c = new long long int[n];
    d = new long long int[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }
    for (int i = 0; i < n; i++) {
        cin >> c[i] >> d[i];
    }
    int max = 0, min = 0,time=0,flag,pre;
    for (int i = 0,j=0; i < n&&j<n; ) {
        max = 0;
        min = 0;
        if (b[i] <= c[j] ) {
            i++;
            continue;
        }
        if (d[j] <= a[i]) {
            j++;
            continue;
        }
        if (a[i] >= c[j]) {
            min = a[i];
        }
        else min = c[j];
        if (b[i] <= d[j]) {
            max = b[i];
            i++;
        }
        else {
            max = d[j];
            j++;
        }
        time += (max - min);
    }
    cout << time;
    return 0;
}


/*买菜
int main() {
    int* price;
    int n,x;
    cin >> n;
    price = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> price[i];
    }
    for (int i = 0; i < n; i++) {
        if (i == 0) cout << (price[1] + price[0]) / 2 << " ";
        else if (i == n - 1) cout << (price[n - 2] + price[n - 1]) / 2 << " ";
        else cout << (price[i - 1] +price[i]+ price[i + 1]) / 3 << " ";
    }
    return 0;
}

/* 化学方程式
int main() {
    string* s;
    int n;
    cin >> n;
    s = new string[n];
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }
    long long int m1[91] = { 0 };
    long long int m2[91] = { 0 };
    int j;
    for (int i = 0; i < n; i++) {
        long long int m1[91] = { 0 };
        long long int m2[91] = { 0 };
        int flag = 0;
        for (j = 0; j < s[i].length()&&s[i][j]!='='; j++) {
            m1[s[i][j]]++;
        }
        for (j++; j < s[i].length(); j++) {
            m2[s[i][j]]++;
        }
        for (int p = 65; p < 91; p++) {
            if (m1[p] != m2[p]) {
                cout << "N" << endl;
                flag = 1;
                break;
            }
        }
         if (flag == 0) cout << "Y" << endl;
        
    }
    return 0;
}



/*
int main() {
    long long int n, flag = 0;
    char* results;
    cin >> n;
    results = new char[n];
    char c;
    for (long long int i = 0; i < n; i++) {
        long long int s[91] = { 0 };
        flag = 0;
        cin >> c;
        while (c != '=') {
            s[c]++;
            cin >> c;
        }

        cin >> c;
        //cout << c;
        while (c != '\n') {
            if (s[c] == 0) {
                flag = 1;
                results[i] = 'N';
                break;
            }
            s[c]--;
            c = getchar();
        }
        for (int j = 65; j <= 90; j++) {
            if (s[j] != 0) {
                results[i] = 'N';
                flag = 1;
                break;
            }
        }
        if (flag == 0) results[i] = 'Y';
    }
    for (int i = 0; i < n; i++) {
        cout << results[i] << endl;
    }
    return 0;
}

/*
const int N = 100000;
pair<int, int> a[N + 1];

//期末预测之最佳阈值
//前缀和，后缀和的思想
//未完成
int main() {
    int n, sum;
    cin >> n;
    int* prefix, * suffix;
    prefix = new int[n];
    suffix = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i].first >> a[i].second;
    }
    sort(a, a + n - 1);
    prefix[0] = 0;
    int x;
    for (int i = 1; i < n; i++) {
        if (a[i].first == a[i - 1].first) {
            prefix[i] = prefix[i - 1];
            continue;
        }
        prefix[i] = prefix[i - 1];
        x = i - 1;
        do {
            prefix[i]+=(a[x].second == 0 ? 1 : 0);
            x--;
        } while (a[x].first == a[x + 1].first && x >= 0);
    }
    suffix[n - 1] = a[n - 1].second == 1 ? 1 : 0;
    for (int i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + (a[i].second == 1 ? 1 : 0);
    }
    int max = 0, maxy = 0;
    for (int i = 0; i < n; i++) {
        sum = prefix[i] + suffix[i];
        if (sum > max || (sum == max && a[i].first > a[maxy].first)) {
            max = sum;
            maxy = i;
        }
    }
    //cout << endl;
    cout << a[maxy].first;
}

/*小明种苹果（续）

int main() {
    int n, m, a, num_now, num_left = 0, num_all = 0, flag = 0, adj = 0;
    int* left;//这个数组记录每个树是否掉落，有则为1，否则为0 ， 用于后边雍循环这个数组的方式统计三个掉落数连接的情况
    cin >> n;
    left = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> m;//第一个数为后边的输入的个数
        flag = 0;//标记是否有掉落
        num_now = 0;//记录现在苹果树
        for (int j = 0; j < m; j++) {
            cin >> a;
            if (a > 0 && j == 0) num_now = a;//如果输入的a是大于0，且是第一个数，则现在苹果数就等于a
            if (a > 0 && j != 0) {//如果a>0,且不是第一个数，则需判断是否有掉落的情况
                if (num_now != a && flag == 0) {//如果输入的统计数 与 保存的num_now不相等，则有掉落
                    num_left++;//掉落的苹果数加1
                    left[i] = 1;//记录下 此树有掉落的情况，用于后边统计三个掉落数连接的情况
                    flag = 1;//如果发现有掉落了，则flag=1,以后此树则无需判断掉落与否
                }
                num_now = a;//只要a>0，则更新现有苹果树
            }
            if (a < 0) num_now += a;//如果a<0，则减去疏果树
            if (j == m - 1) num_all += num_now;//如果是最后一个，则把num_now加到剩余苹果总数num_all里
        }
    }//出循环
    //判断三个连一起的情况
        for (int i = 0; i < n ; i++) {
            if (i == n-1) {  //特殊情况 n-1 0 1 三个相邻
                if (left[0] == 1 && left[n - 1] == 1 && left[1] == 1) adj++;
            }
            if (i == n - 2) {//特殊情况 n-2 n-1 0相邻
                if (left[n - 2] == 1 && left[n - 1] == 1 && left[0] == 1) {
                    adj++;
                    continue;
                }
            }
            if (i<=n-2&&left[i] == 1 && left[i + 1] == 1 && left[i + 2] == 1) adj++;//普通情况
        }
 
    cout << num_all << " " << num_left << " " << adj;
    return 0;
}



/*



/*



/*小明种苹果
int main() {
    int n, m,a,num,ans_t=0,ans_p=0,ans_i,max=0,maxi=0;
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        ans_i = 0;
        for (int j = 0; j <= m; j++) {
            if (j == 0) {
                cin >> num;
                ans_t += num;
            }
            else {
                cin >> a;
                ans_p -= a;
                ans_i -= a;
            }
            if (ans_i > max) {
                maxi = i + 1;
                max = ans_i;
            }
        }
    }
        ans_t -= ans_p;
        cout << ans_t <<" " << maxi<<" " << max;
}



/*化学方程式
int main() {
    int n,flag=0;
    char* results;
    cin >> n;
    results = new char[n];
    char c;
    for (int i = 0; i < n; i++) {
        int s[91] = { 0 };
        flag = 0;
        cin >> c;
        while (c != '=') {
            s[c]++;
            cin >> c;
        }
        cin >> c;
        while (c != '\n') {
            if (s[c] == 0) {
                flag = 1;
                results[i] = 'N';
                break;
            }
            s[c]--;
            c = getchar();
        }
        for (int j = 65; j <= 90; j++) {
            if (s[j] != 0) {
                results[i] = 'N';
                flag = 1;
                break;
            }
        }
        if (flag == 0) results[i] = 'Y';
    }
    for (int i = 0; i < n; i++) {
        cout << results[i] << endl;
    }
}


/*
int main() {
    //只有大写字母和等号
    unordered_map<int,int> s1;
    char* results;
    int n,flag=0;
    cin >> n;
    results = new char[n];
    char c;
    for (int i = 0; i < n; i++) {
        flag = 0;
        cin >> c;
        s1.clear();
        while (c != '=') {
            if (s1.count(c) != 0) {
                s1.at(c)++;
            }
            else s1.emplace(c,1);
            cin >> c;
        }
        cin >> c;
        while (c != '\n') {
            if (s1.count(c) == 0) {
                results[i] = 'N';
                flag = 1;
                break;
            }
            else if (s1.at(c) == 1) {
                s1.erase(c);
            }
            else s1.at(c)--;
            c=getchar();
        }
        if (!s1.empty()) {
            results[i] = 'N';
            continue;
        }
        if (flag == 0) results[i] = 'Y';
    }
    for (int i = 0; i < n; i++) {
        cout << results[i];
        if (i != n-1) cout << endl;
    }
    return 0;
}

/*
int main() {
    int Q, M, N, k, S;
    string *func;
    cin >> Q >> M >> N;
    func = new string[M];

    for (int i = 0; i < N; i++) {
        cin >> func[i] >> k;
        if (func[i] == "NOT") {
            string si;
            cin >> si;
        }
        else {
            string si[2];
            cin >> si[0] >> si[2];
        }
    }
    cin >> S;
    for (int i = 0; i < S; i++) {
        for (int j = 0; j < M; j++) {

        }
    }


}

/*
int main() {
    int n, k, t, x1, yd, xr, yu,x,y,p=0,q=0;
    cin >> n >> k >> t >> x1 >> yd >> xr >> yu;
    for (int i = 0; i < n; i++) {
        int num = 0,flag=0,pre=2;
        for (int j = 0; j < t; j++) {
            cin >> x >> y;
            if (pre == 2 && num < k) num = 0;
            if (x >= x1 && x <= xr && y >= yd && y <= yu&&pre!=0) {
                num++;
                flag = 1;
                pre = 1;
                continue;
            }
            if (pre == 1) pre = 2;
        }
        if (flag == 1) p++;
        if (num >= k) q++;
    }
    cout << p << endl << q;
}

/*2020-
int main() {
    int n, x, y,x2,y2;
    cin >> n >> x >> y;
    int max1=0, max2=0, max3=0 ;
    double length1=INT_MAX, length2= INT_MAX, length3= INT_MAX;
    for (int i = 1; i <= n; i++) {
        cin >> x2 >> y2;
        double length = (x - x2) * (x - x2) + (y - y2) * (y - y2);
        if (length < length1) {
            if (length1 <= length2) {
                if (length2 <= length3) {
                    length3 = length2;
                    max3 = max2;
                }
                length2 = length1;
                max2 = max1;
            }
            length1 = length;
            max1 = i;
            continue;
        }
        if (length < length2) {
            if (length2 <= length3) {
                length3 = length2;
                max3 = max2;
            }
            length2 = length;
            max2 = i;
            continue;
        }
        if (length < length3) {
            length3 = length;
            max3 = i;
            continue;
        }
    }
    cout << max1 << endl << max2 << endl << max3;
}




/*暴力法，100分
* 2020-12-02
int main() {
    int* x;
    int* y;
    int n;
    int score[5] = { 0 };
    cin >> n;
    x = new int[n];
    y = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }
    for (int i = 0; i < n; i++) {
        int flag = 0,ans=0;
        for (int j = 0; j < n; j++) {
            if (x[j] == x[i] - 1 && y[j] == y[i]) flag++;
            if (x[j] == x[i] + 1 && y[j] == y[i]) flag++;
            if (x[j] == x[i] && y[j] == y[i]-1) flag++;
            if (x[j] == x[i] && y[j] == y[i]+1) flag++;
            if (x[j] == x[i] - 1 && y[j] == y[i]-1) ans++;
            if (x[j] == x[i] - 1 && y[j] == y[i]+1) ans++;
            if (x[j] == x[i] + 1 && y[j] == y[i]+1) ans++;
            if (x[j] == x[i] + 1 && y[j] == y[i]-1) ans++;
        }
        if (flag == 4) score[ans]++;
    }
    for (int i = 0; i < 5; i++) {
        cout << score[i] << endl;
    }
}

/*2019-12-02 优化法
const int N = 1000;

int main() {
    map<pair<int,int>,int> pos;
    int n,x,y;
    pair<int, int> p[N];
    int score[5] = { 0 };
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> x >> y;
        p[i] = make_pair(x, y);
        pos[p[i]] = 1;
    }
    int ans = 0;
    for (int i = 0; i < n; i++) {
        ans = 0;
        if (pos[make_pair(p[i].first + 1, p[i].second)] && pos[make_pair(p[i].first - 1, p[i].second)] && pos[make_pair(p[i].first, p[i].second + 1)] && pos[make_pair(p[i].first, p[i].second-1)]) {
            if (pos[make_pair(p[i].first + 1, p[i].second + 1)]) ans++;
            if (pos[make_pair(p[i].first + 1, p[i].second - 1)]) ans++;
            if (pos[make_pair(p[i].first - 1, p[i].second + 1)]) ans++;
            if (pos[make_pair(p[i].first - 1, p[i].second - 1)]) ans++;
            score[ans]++;
        }
    }
    for (int i = 0; i < 5; i++) {
        cout << score[i];
        if (i != 4) cout << endl;
    }
}

/*
const long long int N = 10000;
bool pos[N][N];
int main() {
    int n;
    cin >> n;
    int p, q;
    int* x;
    int* y;
    x = new int[n];
    y = new int[n];
    int score[5] = { 0 };
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
        pos[x[i]][y[i]] = true;
    }
    for (int i = 0; i < n; i++) {
        if (x[i] - 1 >= 0 && y[i] - 1 >= 0) {
            if (pos[x[i] - 1][y[i]] == true && pos[x[i] + 1][y[i]] == true && pos[x[i]][y[i] + 1] == true && pos[x[i]][y[i] - 1] == true) {
                x[i] = 0;

                if (x[i] - 1 > 0 && y[i] - 1 > 0 && pos[x[i] - 1][y[i] - 1] == true) x[i]++;
                if (pos[x[i] + 1][y[i] + 1] == true) x[i]++;
                if (pos[x[i] - 1][y[i] + 1] == true) x[i]++;
                if (pos[x[i] + 1][y[i] - 1] == true) x[i]++;
                score[x[i]]++;
            }
        }
    }
    for (int i = 0; i < 5; i++) {
        cout << score[i] << endl;
    }
    return 0;
}

/*2019-12-01 报数
int main() {
    int n;
    cin >> n;
    int i = 0;//记录报的总数
    int j = 1,k=0;//记录报到数字几
    int people = 0;//记录是第几个人报
    int x[4] = { 0 };//分别记录跳过的数
    while (i != n) {
        int flag = 0;
        if (people == 4) people = 0;
        if (j % 7 == 0) {
            x[people]++;
            flag = 1;
        }
        k = j;
        if (flag == 0) {
            while (k != 0) {
                if (k % 10 == 7) {
                    x[people]++;
                    flag = 1;
                    break;
                }
                k = k / 10;
            }
        }
        if (flag == 1) {
            j++;
            people++;
            continue;
        }
        i++;
        j++;
        people++;
    }
    for (int i = 0; i < 4; i++) {
        cout << x[i] << endl;
    }
    return 0;
}


/* 2020-03-2
int main() {
    int n, a, b;
    cin >> n >> a >> b;
    long long int* u_index;
    long long int* v_index;
    long long int* u_value;
    long long int* v_value;
    u_index = new long long int[a];
    v_index = new long long int[b];
    u_value = new long long int[a];
    v_value = new long long int[b];
    for (int i = 0; i < a; i++) {
        cin >> u_index[i] >> u_value[i];
    }
    for (int i = 0; i < b; i++) {
        cin >> v_index[i] >> v_value[i];
    }
    int i = 0, j = 0;
    long long int sum=0;
    while (i < a && j < b) {
        if (u_index[i] == v_index[j]) {
            sum += u_value[i] * v_value[j];
            i++; j++;
        }
        if (u_index[i] > v_index[j]) {
            j++;
        }
        if (u_index[i] < v_index[j]) {
            i++;
        }
    }
    cout << sum;
}
/*
* 2020-03-1 
int main(){
    int n, m;
    cin >> n >> m;
    long long int* x;
    long long int* y;
    long long int* x2;
    long long int* y2;
    long long int* z2;
    char* type;
    x= new  long long int[n];
    y=new long long int[n];
    x2 = new  long long int[m];
    y2 = new long long int[m];
    z2 = new long long int[m];
    type=new char[n];
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i] >> type[i];
    }
    for (int i = 0; i < m; i++) {
        cin >> x2[i] >> y2[i] >> z2[i];
    }
    int a,flag=0;
    
    for (int j = 0; j < m; j++) {
        a = 0;
        if (type[0] == 'A' && (x2[j] + x[0] * y2[j] + y[0] * z2[j]) > 0) {
            a = 1;
        }
        if (type[0] == 'B' && (x2[j] + x[0] * y2[j] + y[0] * z2[j]) < 0) {
            a = 1;
        }
        flag = 0;
        for (int i = 1; i < n; i++) {
            if (a == 1) {
                if (type[i] == 'A' && (x2[j] + x[i] * y2[j] + y[i] * z2[j]) > 0) {
                    continue;
                }
                else if (type[i] == 'B' && (x2[j] + x[i] * y2[j] + y[i] * z2[j]) < 0) {
                    continue;
                }
                else { 
                    cout << "No" << endl;
                    flag = 1;
                    break;
                }
            }
            else {
                if (type[i] == 'B' && ((x2[j] + x[i] * y2[j] + y[i] * z2[j]) > 0)) {
                    continue;
                }
                else if (type[i] == 'A' && (x2[j] + x[i] * y2[j] + y[i] * z2[j]) < 0) {
                    continue;
                }
                else {
                    cout << "No" << endl;
                    flag = 1;
                    break;
                }
            }
            //cout << endl;
        }
        if (flag == 0) cout << "Yes";
        if (j != m - 1 && flag == 0) cout << endl;
    }
    return 0;
}
/*
//期末预测之最佳阈值，优化未完成


const int N = 100000;
pair<int, int> a[N + 1];

//期末预测之最佳阈值
//前缀和，后缀和的思想
//未完成
int main() {
    int n, sum;
    cin >> n;
    int *prefix, *suffix;
    prefix = new int[n];
    suffix = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i].first >> a[i].second;
    }
    sort(a , a + n-1);
    prefix[0]=0;
    int x;
    for (int i = 1; i < n; i++) {
        x = i-1;
        //while (a[i].first == a[x].first) {
          //  x--;
        //}
        
        int max = prefix[x];
        while (a[x].first == a[x-1].first&&x!=0) {
            if (a[x].second == 1) x--;
        }
        if (x < 0) {
            prefix[i] = 0;
            continue;
        }
        prefix[i] = prefix[x] +(a[x].second == 0 ? 1 : 0);
       // cout << prefix[i] << " ";
    }
    suffix[n - 1] = a[n-1].second==1?1:0;
    //cout << endl;
    for (int i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + (a[i].second == 1 ? 1 : 0); 
        //cout << suffix[i] << " ";
    }
    int max = 0,maxy=0;
    for (int i = 0; i < n; i++) {
        sum = prefix[i] + suffix[i];
        if (sum > max||(sum==max&&a[i].first>a[maxy].first)) {
            max = sum;
            maxy = i;
        }
    }
    //cout << endl;
    cout << a[maxy].first;

}

/*
//期末预测之最佳阈值
//const int N = 100000;
//int y[N];
//int results[N];
int main() {
    int n,p,q;
    cin >> n;
    vector<int> y;
    vector<int> results;
    for (int i = 0; i < n; i++) {
        cin >> p >> q;
        y.push_back(p);
        results.push_back(q);
    }
    int result, k, num = 0, max = 0,maxy=0;
    for (int i = 0; i < n; i++) {
        num=0;
        k = y[i];
        for (int j = 0; j < n; j++) {
            if (y[j] < k) result = 0;
            else result = 1;
            if (result == results[j]) num++;
        }
        if (num > max||(num==max&&y[i]>maxy)) {
            max = num;
            maxy = y[i];
        }
    }
    cout << maxy;
}



/*
int main() {
    int n;
    cin >> n;
    int max = INT_MIN, min = INT_MAX;//正无穷和负无穷
    int mid = 0;
    int flag=0;
    //我这里遍历了一遍
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x > max) max = x;
        if (x < min) min = x;
        //如果是偶数个
        if (n % 2 == 0 && (i == n / 2 || i == n / 2 - 1)) {
            mid += x;
        }
        if (n % 2 == 0 && i == n / 2+1) {
            if(mid%2!=0) flag=1;//如果除以2后是小数，则在输出的时候 手动加一个.5
            mid = mid / 2;
           // mid = round(mid * 10) / 10;
        }
        if (n % 2 != 0 && i == n / 2) mid = x;
    }
    if (mid > max) {
        cout << mid;
        if (flag==1) cout << ".5"; //加.5
        cout<< ' ' << max << ' ' << min;
    }
    else if (mid <= max)
    {
        cout << max << ' ' << mid;
        if (flag==1) cout << ".5";
        cout << ' ' << min;
    }
}


const int N = 100;
string str[N];
bool isNumber(char c) {
    if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9')
        return true;
    return false;
}
bool isPrior(char c1, char c2) {//判断优先级
    int x1 = 0, x2 = 0;
    if (c2 == '#') return true;//如果栈内没有运算符，直接加入
    if (c2 == 'x' || c2 == '/') return false;//如果栈顶是*或者/，则先算此运算符。
    if (c1 == '+' || c1 == '-') x1 = 1;
    if (c1 == 'x' || c1 == '/') x1 = 2;
    //栈顶
    if (c2 == '+' || c2 == '-') x2 = 1;
    if (c2 == 'x' || c2 == '/') x2 = 2;
    if (x1 > x2) return true;
    else return false;
}
int Calculate(int x, int y, char c) {
    if (c == '+') return x + y + 48;
    if (c == '-') return y - x + 48;
    if (c == 'x') return x * y + 48;
    if (c == '/') return y / x + 48;
}
int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> str[i];
    }
    for (int i = 0; i < n; i++) {
        stack<int> s1;//运算符栈
        stack<int> s2;//运算数栈
        s1.push('#');

        for (int j = 0; j < 7; j++) {
            char c = str[i].at(j);
            int k = j;
            if (isNumber(c)) {//如果是数字，直接加入栈
                s2.push(c);
            }
            else {
                switch (isPrior(c, s1.top())) {
                case true:
                    s1.push(c);
                    break;
                case false:
                    char h = s1.top();
                    s1.pop();
                    int x = s2.top() - 48;
                    s2.pop();
                    int y = s2.top() - 48;
                    s2.pop();
                    x = Calculate(x, y, h);
                    s2.push(x);//计算之后再将结果插入运算数栈
                    j--;
                    break;
                }
            }
        }
        int x = 0;
        while (s1.top() != '#') {
            char c = s1.top();
            s1.pop();
            x = s2.top() - 48;
            s2.pop();
            int y = s2.top() - 48;
            s2.pop();
            x = Calculate(x, y, c);
            s2.push(x);
        }
        // cout << x;
        if (x == 24 + 48) cout << "Yes" ;
        else cout << "No" ;
        if (i != n - 1) cout << endl;
    }
    return 0;
}
/*
int main() {
    int n;
    cin >> n;
    int max = INT_MIN, min = INT_MAX;
    double mid = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x > max) max = x;
        if (x < min) min = x;
        if (n % 2 == 0 && (i == n / 2 || i == n / 2 - 1)) {
            mid += x;
        }
        if (n % 2 == 0 && i == n / 2+1) {
            mid = mid / 2;
            mid = round(mid * 10) / 10;
        }
        if (n % 2 != 0 && i == n / 2) mid = x;
    }
    if (mid > max) {
        cout << mid << ' ' << max << ' ' << min;
    }
    else if (mid <= max && mid >= min) cout << max << ' ' << mid << ' ' << min;
    else cout << max << ' ' << min << ' ' << mid;
}

/*
* 2019-03-2
const int N = 100;
string str[N];
bool isNumber(char c) {
    if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9')
        return true;
    return false;
}
bool isPrior(char c1, char c2) {
    int x1=0, x2=0;
    if (c2 == '#') return true;
    if (c2 == 'x' || c2 == '/') return false;
    if (c1 == '+' || c1 == '-') x1 = 1;
    if (c1 == 'x' || c1 == '/') x1 = 2;
    //栈顶
    if (c2 == '+' || c2 == '-') x1 = 1;
    if (c2 == 'x' || c2 == '/') x1 = 2;
    if (x1 > x2||x1==x2) return true;
    else return false;
}
int Calculate(int x, int y, char c) {
    if (c == '+') return x + y+48;
    if (c == '-') return y - x+48;
    if (c == 'x') return x * y+48;
    if (c == '/') return y/x+48;
}
int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >>str[i];
    }
    for (int i = 0; i < n; i++) {
        stack<int> s1;
        stack<int> s2;
        s1.push('#');
   
        for (int j = 0; j < 7; j++) {
            char c=str[i].at(j);
            int k = j;
            if (isNumber(c)) {
                s2.push(c);
            }
            else {
                switch (isPrior(c,s1.top())) {
                case true:
                    s1.push(c);
                    break;
                case false:
                    char h = s1.top();
                    s1.pop();
                    int x = s2.top()-48;
                    s2.pop();
                    int y = s2.top()-48;
                    s2.pop();
                    x=Calculate(x, y, h);
                    s2.push(x);
                    j--;
                    break;
                }
            }
        }
        int x=0;
        while (s1.top()!='#') {
            char c = s1.top();
            s1.pop();
            x = s2.top()-48;
            s2.pop();
            int y = s2.top()-48;
            s2.pop();
            x = Calculate(x, y, c);
            s2.push(x);
        }
       // cout << x;
        if (x == 24+48) cout << "Yes"<<endl;
        else cout << "No"<<endl;
    }
    return 0;
}


/*
* 2019-03-1
int main() {
    int n;
    cin >> n;
    int max=INT_MIN, min=INT_MAX;
    double mid = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x > max) max = x;
        if (x < min) min = x;
        if (n % 2 == 0 && (i == n / 2 || i == n / 2 - 1)) {
            mid +=x;
        }
        if (n % 2 == 0 && i > n / 2) {
            mid=mid/2;
            mid=round(mid * 10) / 10;
        }
        if (n % 2 != 0 && i == n / 2) mid = x;
    }
    if (mid > max) {
        cout << mid << ' ' << max << ' ' << min;
    }
    else if (mid <= max && mid >= min) cout << max << ' ' << mid<<' '<<min;
    else cout << max << ' ' << min << ' ' << mid;
}

/*2021-04-2
const int N = 600 + 1;
int a[N][N];
int h[N][N];

int main() {
    int n, l, r, t;
    cin >> n >> l >> r >> t;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            h[i][j] = a[i][j];
            if (j - 1 >= 0) {
                h[i][j] += a[i][j - 1];
                if (i - 1 >= 0) h[i][j] -= a[i - 1][j - 1];
            }
            if (i - 1 >= 0) h[i][j] += a[i - 1][j - 1];
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int l1=min(0,)
        }
    }
}
/*
2020-12-1
int main() {
    int n;
    cin >> n;
    int sum=0;
    for (int i = 0; i < n; i++) {
        int w, score;
        cin >> w >> score;
        sum+= w * score;
    }
     if (sum <= 0) {
         cout << 0;
        }
    else cout << sum;
    return 0;
}

/* 2021-04-2
const int N = 600 + 1;
int a[N][N], h[N][N];
int main()
{
    int n, l, r, t;
    cin >> n >> l >> r >> t;
   // int a[100][100];
    memset(a, 0, sizeof a);
    //int h[100][100];
    memset(h, 0, sizeof h);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int num = 0;
            for (int k = i - r; k <= i + r; k++) {
                for (int m = j - r; m <= j + r; m++) {
                    if (k >= 0 && k < n && m >= 0 && m < n) {
                        h[i][j] += a[k][m];
                        num++;
                    }
                    
                }
            }
            if (h[i][j] <=t * num) ans++;
        }
    }
    cout << ans;
    return 0;
}

    
    * CSP2021-04-1
    int n, m, l;
    cin >> n >> m >> l;
    int h[256];
    memset(h, 0, sizeof h);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            int x;
            cin >> x;
            h[x]++;
        }
    }
    for (int i = 0; i < l; i++) {
        cout << h[i] << ' ';
    }
    cout << endl;
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
