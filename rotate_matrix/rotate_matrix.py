"""
Rotate Matrix: Given an image represented by an NxN matrix,
where each pixel in the image is 4 bytes, write a method to rotate
the image by 90 degrees. Can you do this in place?
"""

def rotate_matrix(matrix):
    n = len(matrix)
    rotate_matrix = []
    for i in range (0, n):
        rotate_matrix.append([])
    for i in range (0, n):
        for j in range(0, n):
            rotate_matrix[i].append(matrix[j][i])
    return rotate_matrix

def rotate_matrix_inplace(matrix):
    n = len(matrix)

    # Transpose the matrix (reflect over the main diagonal)
    for i in range(0, n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    print(f"Matrix after reflection={matrix}")

    # Reverse row in place
    for i in range(n):
        left = 0
        right = n - 1
        while left < right:
            matrix[i][left], matrix[i][right] = matrix[i][right], matrix[i][left]
            left += 1
            right -= 1

    print(f"Matrix after reversal={matrix}")
    return matrix

