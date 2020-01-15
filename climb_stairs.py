# class Solution(object):
def climbStairs(n):
    """
    :type n: int
    :rtype: int
    """
    table = [None] * (n + 1)
    table[1] = 1
    table[2] = 2

    for step in range(3, n + 1):
        step1 = step - 1
        step2 = step - 2

        table[step] = table[step1] + table[step2]

    return table[-1]

print(climbStairs(6))

