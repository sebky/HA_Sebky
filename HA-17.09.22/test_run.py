import unittest

from run import sub


class TestSub(unittest.TestCase):

    def test_sub_function(self):
        self.assertEqual(sub(9, 7), 2)
        self.assertEqual(sub(10, 7), 3)

    def test_add_function_with_floats(self):
        self.assertAlmostEqual(sub(13.5, 10.5), 3.0)


if __name__ == "__main__":
    unittest.main()
