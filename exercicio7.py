# https://leetcode.com/problems/find-triangular-sum-of-an-array
class Solution:
    def triangularSum(self, nums):
        if len(nums) == 1:
            return nums[0]
        while len(nums) > 1:
            nova = []
            limite = 10
            for i in range(0, len(nums)-1):
                soma = (nums[i] + nums[i+1]) % limite
                nova.append(soma)
            nums = nova
        return soma
a = Solution()
print(a.triangularSum([1,2,3,4,5]))
print(a.triangularSum([1]))

