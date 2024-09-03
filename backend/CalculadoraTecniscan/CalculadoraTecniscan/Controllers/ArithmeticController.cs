using Microsoft.AspNetCore.Mvc;

namespace CalculadoraTecniscan.Controllers
{
    // Especifica la ruta base para las rutas de este controlador.
    [Route("api/arithmetic")]
    [ApiController]
    public class ArithmeticController : Controller
    {
        // Define un método HTTP GET para realizar la suma.
        [HttpGet("sum")]
        public ActionResult Sum(int num1, int num2) {
            int result = num1 + num2;
            return Ok(result);
        }
        // Define un método HTTP GET para realizar la resta.

        [HttpGet("subtract")]
        public ActionResult Subtract(int num1, int num2)
        {
            int result = num1 - num2;
            return Ok(result);
        }
        // Define un método HTTP GET para realizar la multiplicacion.

        [HttpGet("multiply")]
        public ActionResult Multiply(int num1, int num2)
        {
            int result = num1 * num2;
            return Ok(result);
        }

        // Define un método HTTP GET para realizar la division.

        [HttpGet("divide")]
        public ActionResult Divide(int num1, int num2)
        {
            if (num2 == 0)
            {
                return BadRequest("No se permite una division dentro de 0");
            }
            int result = num1 / num2;
            return Ok(result);
        }
    }
}
