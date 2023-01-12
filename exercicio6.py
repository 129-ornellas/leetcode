class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        for letra in (stones):
            if letra in(jewels):
                count +=1
        return count


a = Solution()
print(a.numJewelsInStones("aA", "aAAAbbbb"))