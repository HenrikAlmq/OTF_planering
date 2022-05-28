using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.DeliveryRows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeliveryRowController : ControllerBase
    {
        private readonly IDeliveryRowsRepository _deliveryRowsRepository;
        public DeliveryRowController(IDeliveryRowsRepository deliveryRowsRepository)
        {
            _deliveryRowsRepository = deliveryRowsRepository;
        }

        [HttpGet("{deliveryId}")]
        public async Task<ActionResult<DeliveryRows[]>> Get(int deliveryId)
        {
            try
            {
                var results = await _deliveryRowsRepository.GetDeliveryRowAsync(deliveryId);

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<DeliveryRows>> Post(DeliveryRows deliveryrow)
        {
            try
            {
                _deliveryRowsRepository.CreateDeliveryRow(deliveryrow);

                return Ok(new
                {
                    DeliveryRowId = deliveryrow.DeliveryRowId,
                    DeliveryId = deliveryrow.DeliveryId,
                    ProductId = deliveryrow.ProductId,
                    ArticleNumber = deliveryrow.ArticleNumber,
                    OriginalQuantity = deliveryrow.OriginalQuantity,
                    PickedQuantity = deliveryrow.PickedQuantity,
                    Picked = false
                });
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpDelete("{deliveryRowId:int}")]
        public async Task<ActionResult<DeliveryRows>> DeleteDeliveryRow(int deliveryRowId)
        {
            try
            {
                var deliveryRowToDelete = await _deliveryRowsRepository.GetDeliveryRowByDeliveryRowId(deliveryRowId);

                if (deliveryRowToDelete == null)
                {
                    return NotFound($"Orderrad med ID: {deliveryRowId} finns inte");
                }

                return await _deliveryRowsRepository.DeleteDeliveryRow(deliveryRowId);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
            }
        }
    }
}
