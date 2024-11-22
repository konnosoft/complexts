/**
 * Reimplementation of the built-in Math object
 * @hideconstructor
 */
export default abstract class MyMath {
  /**
   * Absolute value
   *
   * $$|x| = \begin{cases}
   *   -x, & \text{if } x < 0 \\\\
   *   x,  & \text{otherwise}
   * \end{cases}$$
   */
  public static abs(x: number): number {
    return x < 0 ? -x : x;
  }

  /**
   * Limit of a sequence
   *
   * $$\lim_{n \to \infty} f(n)$$
   */
  public static lim(
    f: (n: number) => number,
    debug: boolean = false,
  ): number {
    let previous = f(2**0);

    if (debug) {
      console.log(0, previous);
    }

    for (let n = 1;; n++) {
      const current = f(2**n);
      const relative_difference = Math.abs(current - previous) / Math.abs(current);

      if (debug) {
        console.log(n, current, relative_difference);
      }

      if (relative_difference < Number.EPSILON) {
        return current;
      }

      previous = current;
    }
  }
}
