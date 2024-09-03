// Importaciones necesarias desde Angular
import { Component } from '@angular/core'; // Importa la clase Component para definir un componente de Angular
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar peticiones HTTP

// Decorador @Component que define metadatos del componente
@Component({
  selector: 'app-arithmetic', // Nombre del selector utilizado en HTML para este componente
  templateUrl: './arithmetic.component.html', // Ruta al archivo de plantilla HTML asociado
  styleUrls: ['./arithmetic.component.css'] // Ruta a los archivos de estilo CSS asociados
})

// Definición de la clase del componente ArithmeticComponent
export class ArithmeticComponent {
  // Propiedades del componente
  num1: number = 0; // Almacena el primer número para la operación
  num2: number = 0; // Almacena el segundo número para la operación
  operation: string = 'sum'; // Almacena la operación seleccionada (por defecto es 'sum')
  result: number | null = null; // Almacena el resultado de la operación

  // Constructor que inyecta HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) {}

  // Método que se ejecuta al enviar el formulario y realizar la operación aritmética
  calculate() {
    // Construcción de la URL para realizar la petición al backend
    const url = `http://localhost:5218/api/arithmetic/${this.operation}?num1=${this.num1}&num2=${this.num2}`;
    
    // Realiza la petición GET al backend utilizando HttpClient
    this.http.get<number>(url).subscribe(
      (res) => { // Maneja la respuesta exitosa
        this.result = res; // Asigna el resultado recibido al atributo 'result'
      },
      (err) => { // Maneja los errores
        alert('Ocurrió un error: ' + err.error); // Muestra un mensaje de error al usuario
      }
    );
  }

  // Método para validar si el campo de entrada es un número entero
  validateNumber(field: any) {
    // Verifica si el valor es un número entero válido
    if (field.value && !Number.isInteger(+field.value)) {
      field.control.setErrors({ invalidInteger: true }); // Establece un error personalizado
    } else {
      field.control.setErrors(null); // Limpia los errores si el valor es válido
    }
  }
}
