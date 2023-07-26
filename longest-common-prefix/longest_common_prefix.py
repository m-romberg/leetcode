def longest_common_prefix(strs):
    """
    Takes in an array of strings and outputs longest common prefix

    >>> longest_common_prefix(["Flower", "Flow", "Flame])
    "Fl"
    """
    prefix = min(strs, key=len)
    for s in strs:
        while not s.startswith(prefix):
            prefix = prefix[:-1]

    return prefix