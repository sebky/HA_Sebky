import unittest

from run import sub


class TestSub(unittest.TestCase):

    def test_sub_function(self):
        self.assertEqual(sub(9, 7), 2)
        self.assertEqual(sub(10, 7), 5)

    def test_add_function_with_floats(self):
        self.assertAlmostEqual(sub(8.9, 10.5), 1.6)


if __name__ == "__main__":
    unittest.main()