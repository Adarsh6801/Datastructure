class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
  
        current = current.children.get(char);
      }
  
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!current.children.has(char)) {
          return false;
        }
  
        current = current.children.get(char);
      }
  
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!current.children.has(char)) {
          return false;
        }
  
        current = current.children.get(char);
      }
  
      return true;
    }
  
    suggestions(prefix) {
      let current = this.root;
      const suggestions = [];
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!current.children.has(char)) {
          return suggestions;
        }
  
        current = current.children.get(char);
      }
  
      this.collectSuggestions(current, prefix, suggestions);
  
      return suggestions;
    }
  
    collectSuggestions(node, prefix, suggestions) {
      if (node.isEndOfWord) {
        suggestions.push(prefix);
      }
  
      for (const [char, child] of node.children) {
        this.collectSuggestions(child, prefix + char, suggestions);
      }
    }
  }

  const trie = new Trie();

  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  trie.insert("app");
  trie.insert("ball");
  
  console.log(trie.suggestions("ap")); // ["apple", "app"]
  console.log(trie.suggestions("ba")); // ["banana", "ball"]
  console.log(trie.suggestions("or")); // ["orange"]
  console.log(trie.suggestions("gr")); // []
  