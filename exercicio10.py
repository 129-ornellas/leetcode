class Solution:
    def maximumGap(self, nums):
        if len(nums) < 2:
            return 0
        nums.sort()
        maior_espaco = []
        for el in range(0, len(nums)):
            if el == len(nums)-1:
                return max(maior_espaco)
            pego = nums[el+1] - nums[el]
            maior_espaco.append(pego)




a = Solution()
print(a.maximumGap([3,6,9,1,13]))