
#include <map>
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
#include <set>
using namespace std;

int main(int argc, const char * argv[]) {
    ifstream fin("features.txt");
    ofstream fout("featuresnew.txt");
    ifstream fin2("featuresnew.txt");
    ifstream fin3("twitter.txt");
    stringstream ss;
    ss<<"svmtwitter";
    ss<<argv[1];
    ss<<".txt";
    ofstream fout2(ss.str());
    int episode = atoi(argv[1]);
    //cout<<episode<<endl;
    string s;
    string prev = "";
    string str[1200];
    for (int i=0; i<1200; i++){
        fin>>str[i];
    }
    sort (str,str+1200);
    for (int i=0; i<1200; i++){
        if (prev==str[i]){
            continue;
        }
        prev = str[i];
        if (str[i].size()>3){
            fout<<str[i]<<endl;
        }
    }
    
    map<string, int> m;
    //vector<string> v;
    fin2>>s;
    int counter = 0;
    while (!m.count(s)){
        m[s] = counter+1;
        //v.push_back(s);
        counter++;
        fin2>>s;
    }
    
    int numtweets;
    fin3>>numtweets;
    getline(fin3,s);
    
    for (int i =0; i<numtweets; i++){
        set<int> indices;
        getline(fin3, s);
        istringstream iss(s);
        int spoiler;
        iss>>spoiler;
        if (spoiler >episode) fout2<<"+1";
        else fout2<<"-1";
        while (iss){
            string s;
            iss>>s;
            //cout<<s<<endl;
            if(s.size()<3) continue;
            if (m.count(s)){
                indices.insert(m[s]);
                continue;
            }
            if (m.count(s.substr(0,s.size()-1))){
                indices.insert(m[s.substr(0,s.size()-1)]);
            }
            if (m.count(s.substr(0,s.size()-2))){
                indices.insert(m[s.substr(0,s.size()-2)]);
            }
            if (m.count(s.substr(0,s.size()-3))){
                indices.insert(m[s.substr(0,s.size()-3)]);
            }
            if (s.size()>4 && m.count(s.substr(0,s.size()-4))){
                indices.insert(m[s.substr(0,s.size()-4)]);
            }
            if (s.size()>5 && m.count(s.substr(0,s.size()-5))){
                indices.insert(m[s.substr(0,s.size()-5)]);
            }
        }
        for (set<int>::iterator it=indices.begin(); it!=indices.end(); ++it)
            fout2 << ' ' << *it<<":"<<"1";
        fout2<<endl;
    }
    
    return 0;
}
