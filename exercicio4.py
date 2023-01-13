class Solution:
    def countWords(self, words1, words2) -> int:
        contador = 0
        for word in words1:
            if words1.count(word) == 1 and word in words2 and words2.count(word) == 1: 
              contador += 1
        return contador